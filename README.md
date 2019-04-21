# subtitle-resync-terminal

Command line wrapper for [subtitle.js](https://github.com/gsantiago/subtitle.js/)

## Usage

1. Download the repo

2. Install dependencies before the first time you run the script  
   ```
   npm install
   ```

3. After installing dependency, you can resync a subtitle file via terminal  
   ```
   node subtitle-resync.js <subtitle file name> <time (in millisecond)>
   ```  
   Note that time can be positive or negative

4. Resynced subtitle file is the one suffixed with `-resync`, located at the same directory as the original file

## Dependencies

- [subtitle.js](https://www.npmjs.com/package/subtitle) - resync subtitles

- [chardet](https://www.npmjs.com/package/chardet) - detect encoding of the input file

## License

MIT