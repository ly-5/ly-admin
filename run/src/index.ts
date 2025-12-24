import { intro, outro, multiselect, spinner } from '@clack/prompts';
import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';

const args = process.argv.slice(2);
const command = args[0]; // dev / build / build:test

if (!command) {
  console.error('请提供命令参数，如 dev / build / build:test');
  process.exit(1);
}

(async () => {
  intro('Turbo Run 多项目工具');

  const appsPath = join(process.cwd(), 'apps');
  const apps = readdirSync(appsPath).filter(dir => {
    try {
      return readdirSync(join(appsPath, dir)).includes('package.json');
    } catch {
      return false;
    }
  });

  if (apps.length === 0) {
    outro('未找到 apps 目录下的项目');
    process.exit(0);
  }

  const selected = await multiselect({
    message: '请选择要运行的项目',
    options: apps.map(app => ({ label: app, value: app }))
  }) as string[];

  if (!selected) {
    outro('未选择项目');
    process.exit(0);
  }

  const fullCommand = `pnpm ${selected.map(app => `--filter ${app}`).join(' ')} run ${command}`;
  const s = spinner();
  s.start(`正在执行: ${fullCommand}`);

  try {
    execSync(fullCommand, { stdio: 'inherit', cwd: process.cwd() });
    s.stop('执行完成');
  } catch (error) {
    s.stop('执行失败');
    console.error(error);
    process.exit(1);
  }

  outro('任务完成');
})();
