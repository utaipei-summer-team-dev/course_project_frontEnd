<template>
  <div class="home">
<<<<<<< Updated upstream
    <h2>這是首頁</h2>
    <img alt="banner" src="../assets/img/banner.png">
    <input type="text" class="search">
    <ul class="hotkeys">
      <li>設計實務</li>
      <li>社區服務</li>
      <li>實習</li>
      <li>藝術</li>
    </ul>
    <h2 class="title">最高評價</h2>
    <div class="scrolling-wrapper">
      <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <div class="ratings">
              <div class="empty_star">★★★★★</div>
              <div class="full_star" style="width: 80%">★★★★★</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <div class="ratings">
              <div class="empty_star">★★★★★</div>
              <div class="full_star" style="width: 60%">★★★★★</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <div class="ratings">
              <div class="empty_star">★★★★★</div>
              <div class="full_star" style="width: 70%">★★★★★</div>
            </div>
          </div>
        </div>
    </div>
    <h2 class="title">最新課程</h2>
    <div class="scrolling-wrapper">
      <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
    </div>
    <h2 class="title">尚未評價</h2>
    <div class="scrolling-wrapper">
      <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
=======
    <!-- <h2>這是首頁</h2> -->
    <div class="banner">
      <img alt="banner" src="../assets/img/768banner.png">
    </div>
    <div class="container">
      <input type="text" class="search" placeholder="在找什麼課嗎？">
      <ul class="hotkeys">大家都在找：
        <li class="keyword">白偉毅</li>
        <li class="keyword">書法課</li>
        <li class="keyword">我要看電影</li>
        <li class="keyword">吉他</li>
        <li class="keyword">兩岸關係</li>
      </ul>
      <div class="course_class">
        <h2 class="title">最高評價</h2>
        <div class="scrolling-wrapper">
          <div class="card" v-for="item in course.slice(0, 5)" :key="item.id">
            <div class="card-body">
              <h5 class="card-title">{{item.courseName}}</h5>
              <small class="text-muted">{{item.teacherName}}</small>
              <div class="value">
                <p class='star_value'>4.0</p>
                <div class="ratings">
                  <div class="empty_star">★★★★★</div>
                  <div class="full_star" v-bind:style="{width: item.rank * 20 + '%'}">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 class="title">最新課程</h2>
        <div class="scrolling-wrapper">
          <div class="card" v-for="item in course.slice(6, 11)" :key="item.id">
            <div class="card-body">
              <h5 class="card-title">{{item.courseName}}</h5>
              <small class="text-muted">{{item.teacherName}}</small>
              <div class="value">
                <p class='star_value'>4.0</p>
                <div class="ratings">
                  <div class="empty_star">★★★★★</div>
                  <div class="full_star" style="width: 80%">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 class="title">尚未評價</h2>
        <div class="scrolling-wrapper">
          <div class="card" v-for="item in course.slice(12, 16)" :key="item.id">
            <div class="card-body">
              <h5 class="card-title">{{item.courseName}}</h5>
              <small class="text-muted">{{item.teacherName}}</small>
              <div class="value">
                <p class='star_value no_value'>尚無評價</p>
                <!-- <div class="ratings">
                  <div class="empty_star">★★★★★</div>
                  <div class="full_star" style="width: 80%">★★★★★</div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>made by utaipei student. 2020</p>
        <div class="footer_bar"></div>
      </footer>
    </div>
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// export default {
//   name: 'Home',
//   components: {
//     HelloWorld,
//   },
// };
=======
export default {
  // name: 'Home',
  data() {
    return {
      course: [],
    };
  },
  created() {
    const url = `http://163.21.235.164:8080/courseList/0`;
    this.$http.get(url)
      .then((res) => {
        console.log(res);
        this.course = res.data;
        console.log(this.course);
      });
  },
};
>>>>>>> Stashed changes
</script>
