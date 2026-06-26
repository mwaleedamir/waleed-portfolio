# Project demo videos

Drop your project demo videos here, then reference them in
`src/data/projects.ts` via the `video` field (e.g. `/videos/fittrack.mp4`).

## Sizing guidance

| Project type | Aspect ratio   | Shown in       |
| ------------ | -------------- | -------------- |
| `mobile`     | **9:16** (portrait)  | Phone frame    |
| `web`        | **16:9** (landscape) | Browser frame  |

Tips:
- Keep each file small (ideally < 8 MB). Compress with HandBrake or `ffmpeg`.
- `.mp4` (H.264) gives the widest browser support.
- Record mobile demos in portrait, web demos in landscape, so they fit the
  device frames perfectly.

Example compress command:

```bash
ffmpeg -i input.mov -vcodec h264 -crf 28 -movflags +faststart fittrack.mp4
```
