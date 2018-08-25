<template>
    <div class="topheader">
        <i class="web-font">CmbWz</i>
    </div>
</template>

<script>
    export default {
        name: "topheader"
    }
</script>

<style scoped>
    @font-face {font-family: 'webfont';
        src: url('../assets/font/webfont.eot'); /* IE9*/
        src: url('../assets/font/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/font/webfont.woff') format('woff'), /* chrome、firefox */
        url('../assets/font/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url('../assets/font/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
    }
    .web-font{
        font-family:"webfont" !important;
        font-size:20px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
