[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/ndus/makefun-ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/ndus/makefun-ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# AI Excited

## What the image shows

A red fox leaps across a canyon, suspended above a river of swirling galaxies. Firelight catches its fur and traces a bright rim around the agile silhouette as the cosmic current turns below.

## How the entry works

`main.ts` locates the `entry.png` beside itself, creates the configured output directory, and copies the image bytes to `entry.png` there. The `MAKEFUN_OUTPUT_DIR` environment variable selects the destination; `/output` is used when it is unset.

## How to run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
