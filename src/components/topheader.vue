<template>
    <div class="topheader">
        <div class="brand">
            <i class="web-font">CmbWz</i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topheader"
    }
</script>

<style scoped>
    .topheader{
        float: left;
        height: 50px;
    }
    .brand{
        display: inline-block;
        width: 200px;
    }
    @font-face {font-family: 'webfont';
        src: url('../assets/font/webfont.eot'); /* IE9*/
        src: url('../assets/font/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/font/webfont.woff') format('woff'), /* chrome、firefox */
        url('../assets/font/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url('../assets/font/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
    }
    .web-font{
        font-family:"webfont" !important;
        font-size:25px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
        padding-top: 10px;
        text-align: center;
        display: block;
    }
</style>
