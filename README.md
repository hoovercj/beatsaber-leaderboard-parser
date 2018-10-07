# Beat Saber Local Leaderboard Parser

This module parses local leaderboard files for Beat Saber.

## Usage

Install the npm package.
```
npm install beatsaber-leaderboard-parser
```

Import
```typescript
// index.ts
import * as fs from 'fs';
import * as path from 'path';
import { BeatSaber, BeatsaberLeaderboardParser } from 'beatsaber leaderboard parser'

const scores = fs.readFileSync(path.join(__dirname, 'scores.json')).toString();

// Use Parser Directly
const beatSaberData = BeatsaberLeaderboardParser.ParseFile(JSON.parse(scores));
beatSaberData.players;
beatSaberData.songs;

// Use BeatSaber helper class
const beatSaber = BeatSaber.FromFile(scores)
beatSaber.songs();
beatSaber.songsByNumberOfPlayers();
beatSaber.songsByMostRecentlyPlayed();
beatSaber.players();
beatSaber.playersByFirstPlaces();
beatSaber.playersByFullCombos();
beatSaber.playersByNumberOfScores();
```
