# subtitle-resync-terminal

Command line wrapper for [subtitle.js](https://github.com/gsantiago/subtitle.js/)

## Usage

1. Download the repo

2. Install dependencies before the first time you resync a subtitle file  
```npm install```

3. After installing dependency, you can resync a subtitle file via terminal  
```node subtitle-resync.js <subtitle file name> <time (in millsecond)>```  
Note that time can be both positive or negative.

   -  Resynced subtile file is the one suffixed with `-resync`, located at the same directory as the origenal file