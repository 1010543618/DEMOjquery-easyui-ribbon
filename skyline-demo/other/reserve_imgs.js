var fs = require("fs")
var path = '../images/'
var reserve_imgs = [
  'choose.png',
  'attribute.png',
  'information.png',
  'area.png',
  'time.png',
  'sun.png',
  'shadow.png',
  'underground.png',
  'layer.png',
  'grid.png',
  'savorPoint.png',
  'treeInformation.png',
  'group.png',
  'paste.png',
  'copy.png',
  'shear.png',
  'delete.png',
  'horizontal.png',
  'space.png',
  'vertical.png',
  'area.png',
  'threeDarea.png',
  'denggao.png',
  'Slope.png',
  'path.png',
  'poumian.png',
  'yanmofenxi.png',
  'sight.png',
  'threeD.png',
  'perspective.png',
  'pengzhuang.png',
  'drag.png',
  'huadong.png',
  'zhuangwan.png',
  'threeD_.png',
  'twoD.png',
  'zhibeidaohang.png',
  'suofang.png',
  'zhibeizhen.png',
  'huanrao.png',
  'tuoyuan.png',
  'Arc.png',
  'line.png',
  'houmian.png',
  'up.png',
  'down.png',
  'right.png',
  'left.png',
  'houshang.png',
  'jiashi.png',
  'dimain.png',
  'zoomIn.png',
  'zoomOut.png',
  'all.png',
  'Eye.png',
  'kongjian.png',
  'shizi.png',
  'zhuangtai.png',
  'bili.png',
  'hud.png',
  'wenben.png',
  'tupian.png',
  'zhexian.png',
  'duobianxing.png',
  'juxing.png',
  'zhengduobian.png',
  'yuan.png',
  'tuoyuan.png',
  'hu.png',
  'jiantou.png',
  'sanweimoxing.png',
  'object.png',
  'qiu.png',
  'sanweijiantou.png',
  'yuanzhu.png',
  'dimian.png',
  'kongzhong.png',
  'attribute.png',
  'shuxingbiao.png',
  'choose.png',
  'area.png',
  'line.png',
  'huapoint.png',
  'objectC.png',
  'chuangjianyanshi.png',
  'jiaxingqudian.png',
  'jiluguiji.png',
  'tianjiabiaoti.png',
  'bianjigongju.png',
  'bofang.png',
  'chuangjianshipin1.png',
  'ditijietu.png',
  'dixingkaiwa.png',
  'xianshiquanbu.png',
  'yinchangquanbu.png',
  'zhikan.png',
  'choose.png',
  'area.png',
  'objectC.png',
  'close.png'
]
fs.readdir(path, function(err, files){
  files.forEach(function(file){
    if (!inArray(file, reserve_imgs)) {
      console.log(file)
      fs.unlinkSync(path + file, function(){})
    }
  })
  // [...new Set(reserve_imgs)]：数组去重
  console.log('reserve : ' + [...new Set(reserve_imgs)].length)
  console.log('files : ' + files.length)
})

function inArray(needle,array,bool){
  if(typeof needle=="string"||typeof needle=="number"){
    for(var i in array){
      if(needle===array[i]){
        if(bool){
          return i;
        }
        return true;
      }
    }
    return false;
  }
}
