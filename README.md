# subtitle-resync-terminal

Command line wrapper for [subtitle.js](https://github.com/gsantiago/subtitle.js/)

## Installation

### NPM

```
npm install -g subtitle-resync-terminal
```

### Download from GitHub

1. Download the [repo](https://github.com/maxloh/subtitle-resync.git)

2. Install dependencies before the first time you run the script  
   ```
   npm install
   ```

3. Install the script as a command-line executable  
   ```
   npm link
   ```

## Usage

```
subtitle-resync <subtitle file path> <time (in millisecond)>
```

Note that time can be positive or negative

Resynced subtitle file is the one suffixed with `-resync`, located at the same directory as the original file

## Dependencies

- [subtitle.js](https://www.npmjs.com/package/subtitle) - resync subtitles

- [chardet](https://www.npmjs.com/package/chardet) - detect encoding of the input file

## License

MIT
