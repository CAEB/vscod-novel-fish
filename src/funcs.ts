import { commands, QuickPickItem, StatusBarAlignment, window } from "vscode";

// 上一页
export const prevPage = commands.registerCommand('extension.prevPage', () => {
  console.log('prevPage');
  window.setStatusBarMessage('prevPage');
});

// 下一页
export const nextPage = commands.registerCommand('extension.nextPage', () => {
  console.log('nextPage');
  window.setStatusBarMessage('nextPage');
});

// 上一章
export const prevChapter = commands.registerCommand('extension.prevChapter', () => {
  console.log('prevChapter');
  window.setStatusBarMessage('prevChapter');
});

// 上一页
export const nextChapter = commands.registerCommand('extension.nextChapter', () => {
  console.log('nextChapter');
  window.setStatusBarMessage('nextChapter');
});

// 选择章节底部菜单
const getSelectChapterBarItem = () => {
  const barItem = window.createStatusBarItem(StatusBarAlignment.Right, 0);
  barItem.command = 'extension.selectChapter';
  barItem.text = '选择章节';
  barItem.show();

  return barItem;
};

export const selectChapterBarItem = getSelectChapterBarItem();

// 选择章节功能
export const selectChapter = commands.registerCommand('extension.selectChapter', () => {
  const quickPick = window.createQuickPick();
  const items: QuickPickItem[] = [{ label: '第一章' }];
  quickPick.items = items;
  quickPick.show();
});