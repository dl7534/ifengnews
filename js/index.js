var ifnews = angular.module('ifengsnews',['ngAnimate','ngRoute','ngTouch']);
ifnews.controller('indexCtrl',['$scope',function($scope){
  if(localStorage.ifx){
    $scope.isFirstOpen = false;
  }else{
    $scope.isFirstOpen = true;
  }
  $scope.enter = function(){
    localStorage.ifx = true;
    $scope.isFirstOpen = false;
  }
  $scope.cehua = false;
  $scope.cehua1 =! $scope.cehua;
}])
ifnews.controller('xinwenCtrl',['$scope',function($scope){
  $scope.xinwenList;
}])

ifnews.directive('ifYingdao',[function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:'views/yingdao.html',
    link:function($scope,el){
      $(function(){
        var mySwiper = new Swiper('.swiper-container',{
          pagination:'.swiper-pagination',
        })
      })
    }
  }
}])

ifnews.directive('ifTopTab',[function(){
  return {
    restrict:'E',
    templateUrl:'views/uqTitle.html',
    link:function($scope,els){
         els.on('click','.channel-top',function(){
           $('.channel').slideUp();
         });
         els.on('click','.title-add',function(){
            $('.channel').slideDown();
         })
         els.on('click','.back',function(){
            $('.today').hide();
         })
         els.on('click','#hs',function(){
            $('.today').toggleClass('show-delete').show();
         })
      }
  }
}]).directive('ifTabBar',[function(){
  return {
    restrict:'E',
    templateUrl:'views/uqlist.html',
  }
  
}]);

var xinwenList = [
  {image:'../images/main1.jpg',title:'习近平出访前瞻：书丝路发展新篇 树国际合作典范',zuanti:'专题',liulan:'20万'},
  {image:'../images/main2.jpg',title:'媒体:这个要害部级岗位空了一年,无人顶上',zuanti:'刚刚',liulan:'2488'},
  {image:'../images/main3.jpg',title:'遭洪素珠辱骂老荣民:不计较我们是见过大风大浪的',zuanti:'刚刚',liulan:'3662'},
  {image:'../images/main4.jpg',title:'男子汇款次日被要求补交1千，银行:有监控 他少给了',zuanti:'广告',liulan:'2.3万'},
  {image:'../images/main5.jpg',title:'库里38+6勇士3-1骑士夺赛点哈登退出梦之队',zuanti:'专题',liulan:''},
  {image:'../images/main6.jpg',title:'外媒:动物保护者在玉林驻京办请愿 要求取消狗肉节',zuanti:'刚刚',liulan:'24万'},
  {image:'../images/main7.jpg',title:'国民党政策会执行长:"中国难民论"出自蔡英文',zuanti:'刚刚',liulan:'2.36万'},
  {image:'../images/main8.jpg',title:'西班牙披露工行涉嫌洗钱案详情:涉案金额达1亿美元',zuanti:'专题',liulan:'28万'},
  {image:'../images/main9.jpg',title:'印度航母维护视发生毒气泄露致2人丧生',zuanti:'2天前',liulan:'73'}

]

var hotList = [
    {image:'../images/hot1.jpg',title:'毛泽东称哪次军事行动是他一生得意之笔',hotname:'毛泽东',liuyan:'27'},
    {image:'../images/hot2.jpg',title:'商业| 马云和张近东又联手放大招了',hotname:'马云',liuyan:'9'},
    {image:'../images/hot3.jpg',title:'[一周天气早知道]点击查看本地天气',hotname:'天气',liuyan:''},
    {image:'../images/hot4.jpg',title:'苹果最坑爹产品已问世!不好好研发',hotname:'iphone',liuyan:'89'},
    {image:'../images/hot5.jpg',title:'[FUN来了] 继囧字之后又出现表情大王',hotname:'段子',liuyan:'78'},
    {image:'../images/hot6.jpg',title:'一名"硅谷之父"去世|一共有几个',hotname:'互联网',liuyan:'0'},
    {image:'../images/hot7.jpg',title:'【读史忆人】勇气',hotname:'光绪',liuyan:'2'},
    {image:'../images/hot8.jpg',title:'亚马逊CEO贝索斯:我永远坚持“长期至上”',hotname:'贝索斯',liuyan:'0'},

]

ifnews.controller('xinwenCtrl',['$scope',function($scope){
    $scope.xinwenList = xinwenList;
}])
ifnews.controller('fenghuanghotCtrl',['$scope',function($scope){
   $scope.hotList = hotList;

}])
ifnews.controller('auduCtrl',['$scope',function($scope){

}])
ifnews.controller('shezhiCtrl',['$scope',function($scope){

}])
ifnews.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
      controller:'xinwenCtrl',
      templateUrl:'views/xinwen.html'
    }).when('/xinwen',{
      controller:'xinwenCtrl',
      templateUrl:'views/xinwen.html'
    }).when('/fenghuanghot',{
      controller:'fenghuanghotCtrl',
      templateUrl:'views/fenghuangre.html'
    }).when('/audu',{
      controller:'auduCtrl',
      templateUrl:'views/audu.html'
    }).when('/shezhi',{
      controller:'shezhiCtrl',
      templateUrl:'views/shezhi.html'
    }).otherwise({
      redirectTo:'/'
    });
}])







    // ng-src = {{}}  不能用angular  假数据
