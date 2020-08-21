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
            <div class="class_name">
                <h5>課程名稱<span>（必填）</span></h5>
                <input type="text" class="input">
            </div>
            <div class="teacher_name">
                <h5>授課老師<span>（必填）</span></h5>
                <input type="text" class="input">
            </div>
            <div class="btn">
                <router-link to="/empty">
                    <button type="button" class="go">匿名送出</button>
                </router-link>
                <router-link to="/courses">
                    <button type="button" class="no">取消</button>
                </router-link>
            </div>
        </div>
    </div>
</template>