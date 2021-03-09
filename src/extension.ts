import { ExtensionContext } from 'vscode';
import { nextChapter, nextPage, prevChapter, prevPage, selectChapter, selectChapterBarItem } from './funcs';

export function activate(context: ExtensionContext) {
  console.log('摸鱼小说神器启动 ----- eb');

  context.subscriptions.push(...[
    prevPage,
    nextPage,
    prevChapter,
    nextChapter,
    selectChapterBarItem,
    selectChapter
  ]);
}

export function deactivate() {
  console.log('摸鱼小说神器退出 ----- eb');
}
