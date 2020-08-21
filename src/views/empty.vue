<template>  
    <div class="evaluation">
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
        <div class="evaluation-container">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">電影賞析</h5>
                    <p class="card-text"><small class="text-muted">白偉毅 老師</small></p>
                    <div class="value">
                        <p class='star_value'></p>
                        <div class="ratings">
                            <div class="empty_star">★★★★★</div>
                            <div class="full_star" style="width: 0%">★★★★★</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="no_eva">
                <p>尚無回應<br>到右下方新增一筆評價吧!</p>
                <img src="../assets/img/empty.png" alt="">
            </div>
            <div class="list">
                <!-- <div class="data"   v-for="(item, index) in course" :key="item.id">
                    <p class="floor">{{index + 1 + 'F'}}</p>
                    <div class="value">
                        <div class="ratings">
                            <div class="empty_star">★★★★★</div>
                            <div class="full_star" v-bind:style="{width: item.rank * 20 + '%'}">★★★★★</div>
                        </div>
                    </div>
                    <p class="string">{{item.contentString}}</p>
                    <p class="time">{{item.createDate}}</p>
                </div> -->
                <router-link to="/newEvaluation">
                    <div class="new_evaluation">
                        <img src="../assets/img/newEvaluation.png" alt="">
                        <!-- <p>新增評價</p> -->
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>