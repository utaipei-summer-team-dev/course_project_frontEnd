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
                    <h5 class="card-title">{{courseData.courseName}}</h5>
                    <p class="card-text"><small class="text-muted">{{courseData.teacherName}} 老師</small></p>
                    <div class="value">
                        <p class='star_value'>{{courseData.starLevel}}</p>
                        <div class="ratings">
                            <div class="empty_star">★★★★★</div>
                            <div class="full_star" v-bind:style="{width: courseData.starLevel * 20 + '%'}">★★★★★</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="data"   v-for="(item, index) in course" :key="item.id">
                    <p class="floor">{{index + 1 + 'F'}}</p>
                    <div class="value">
                        <!-- <p class='star_value'>{{item.rank}}</p> -->
                        <div class="ratings">
                            <div class="empty_star">★★★★★</div>
                            <div class="full_star" v-bind:style="{width: item.rank * 20 + '%'}">★★★★★</div>
                        </div>
                    </div>
                    <p class="string">{{item.contentString}}</p>
                    <p class="time">{{item.createDate}}</p>
                </div>
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

<script>
export default {
    name: 'evaluation',
    data() {
        return {
        course: [],
        courseData: {},
        };  
    },
    created() {
        const { id } = this.$route.params;
        const url = `http://163.21.235.164:8080/evaluationList/${id}`;
        console.log(this.$route.params);
        this.$http.get(url)
        .then((res) => {
            console.log(res);
            this.course = res.data;
        });
        const courseData = `http://163.21.235.164:8080/courseData/${id}`;
        this.$http.get(courseData)
        .then((res) => {
            console.log(res);
            this.courseData = res.data;
        });
    },
};
</script>
