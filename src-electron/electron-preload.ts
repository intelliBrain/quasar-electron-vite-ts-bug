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
    //const win = BrowserWindow.getFocusedWindow(); // IMPORTANT: NO ERROR if this line is commented out!
  },
});
