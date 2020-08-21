<template>
    <div class="form">
        <div class="nav">
            <router-link to="/courses">
                <a href=""><img src="../assets/img/pre.png" alt=""></a>
            </router-link>
            <router-link to="/#">   
                <a href=""><img src="../assets/img/home.png" alt=""></a>
            </router-link>
        </div>
        <div class="overlay"></div>
        <div class="banner">
            <!-- <div class="overlay"></div> -->
            <img alt="banner" src="../assets/img/768banner.png">
        </div>
        <div class="form_container">
            <div class="eva_rank">
                <h5>你給幾顆星<span>（必填）</span></h5>
                <p class="ps">最棒是五星!最雷是一星!</p>
                <div class="value">
                    <div class="ratings">
                        <div class="empty_star">★★★★★</div>
                        <div class="full_star" style="width: 0%">★★★★★</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <h5>說點什麼吧<span>（必填）</span></h5>
                <textarea class="eva_content" placeholder="分享你對這堂課的感受或評價吧"></textarea>
            </div>
            <div class="btn">
                <router-link to="/evaluationList">
                    <button type="button" class="go">匿名送出</button>
                </router-link>
                <router-link to="/evaluationList">
                    <button type="button" class="no">取消</button>
                </router-link>
            </div>
        </div>
    </div>
</template>