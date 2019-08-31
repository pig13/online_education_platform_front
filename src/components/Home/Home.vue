<template>

  <el-carousel indicator-position="outside" height='600px'>
    <el-carousel-item v-for="item in lunboImgs" :key="item.id">
      <img :src="item.imgSrc" alt="">
    </el-carousel-item>
  </el-carousel>

</template>

<script>
    export default {

        name: 'Home',
        data() {
            return {
                lunboImgs: [
                    {
                        id: 1,
                        imgSrc: 'https://cdn.pixabay.com/photo/2015/05/26/21/53/ubuntu-785622_960_720.png'
                    },
                    {
                        id: 2,
                        imgSrc: 'http://www.4usky.com/data/out/55/164484487-linux-wallpapers.jpg'
                    },
                    {
                        id: 3,
                        imgSrc: 'https://cdn.pixabay.com/photo/2017/02/20/14/18/technology-2082642_960_720.jpg',
                    },
                    {
                        id: 4,
                        imgSrc: 'https://cdn.jikefan.com/2018/07/Python-3.jpg',
                    }
                ]
            };
        },
        created() {
            // console.log(localStorage);
        }
    };
</script>

<style lang="css" scoped>

  img {
    width: 100%;
  }
</style>
