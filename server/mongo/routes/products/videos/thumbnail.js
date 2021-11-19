const express = require("express");
const router = express.Router();

let ffmpeg = require('fluent-ffmpeg');

/////////////////////////////////////////////////////
/*                                                 */
/*         /api/mongo/product/thumbnail            */
/*                                                 */
/////////////////////////////////////////////////////

router.post('/', (req, res) => {
  let filePath = "";
  let fileDuration = "";

  // 비디오 정보 가져오기
  ffmpeg.ffprobe(req.body.url, (err, metadata) => {
    fileDuration = metadata.format.duration;
  });

  // 썸내일 생성
  ffmpeg(req.body.url)  // 클라이언트에서 온 비디오 정보
    .on('filenames', (filenames) => {
      filePath = "uploads/thumbnails/" + filenames[0];
    })
    .on('end', () => {
      return res.json({ success: true, url: filePath, fileDuration: fileDuration });
    })
    .on('error', (err) => {
      console.error(err);
      return res.json({ success: false, err });
    })
    .screenshots({  // 옵션
      count: 1, // 1개의 썸내일을 띄울 수 있다.
      folder: 'uploads/thumbnails',
      size: '320x240',
      filename: 'thumbnail-%b.png'
    })
})

module.exports = router;
