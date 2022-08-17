import { contextBridge } from 'electron';
import { BrowserWindow } from '@electron/remote';

// const { contextBridge } = require('electron');
//const { BrowserWindow } = require('@electron/remote');

console.log('electron-preload.ts');

// 'electronApi' will be available on the global window context
contextBridge.exposeInMainWorld('electronApi', {
  testMeAsync: async () => {
    console.log('=> testMeAsync');
  },

  maximize: () => {
    console.log('=> maximize');
    const win = BrowserWindow.getFocusedWindow(); // IMPORTANT: NO ERROR if this line is commented out!

    if (win !== null) {
      if (win.isMaximizable()) {
        if (win.isMaximized() === false) {
          win.maximize();
        } else {
          console.log(
            'unable to maximize, win is already maximized => restore instead'
          );
          win.restore();
        }
      } else {
        console.log('unable to maximize, win is not maximizable');
      }
    } else {
      console.log('unable to maximize, win is null');
    }
  },
});
