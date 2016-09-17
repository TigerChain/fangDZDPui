/**
 * Created by chenjunjun
 * 电影界面
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ListView
} from 'react-native' ;

//引入图片文字组件
var HomeTopItemView = require('../../home/HomeTopItemView');

/**引入三方模块*/
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
/**引入三方模块*/
var ViewPager = require('react-native-viewpager');
//取得模拟数据
var hotMoviePagerData = require('../../data/hotMoviePagerData.json');

import MoveArrowView from '../../common/MoveArrowView';

//引稂推荐影院条目组件
import RecommendMvListItem from  './RecommendMvListItem' ;

var ToastAndroid = require('ToastAndroid');

//引入推荐影院列表模拟数据
var recommendMvData = require('../../data/recommendMvData.json') ;

import QuickLogin from '../../user/QuickLogin';

const BANNER_IMGS = [
    'http://p0.meituan.net/148.208/movie/1ead6be0be6cf122a38bfe18e47acba1221793.jpg',
    'http://p0.meituan.net/148.208/movie/337985da4efdb756f9c8395d02b445f0413246.jpg',
    'http://p0.meituan.net/148.208/movie/1ead6be0be6cf122a38bfe18e47acba1221793.jpg',
    'http://p0.meituan.net/148.208/movie/1ead6be0be6cf122a38bfe18e47acba1221793.jpg',
    'http://p0.meituan.net/148.208/movie/1ead6be0be6cf122a38bfe18e47acba1221793.jpg',
];

export default  class Movie extends React.Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        const ds =
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS),
            listDataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loaded: false,
        };
    }

    //处理耗时操作
    componentDidMount() {
        this.parseData();
    }

    parseData(){
       var listDatas = recommendMvData.recMvList;
        this.setState({
            listDataSource: this.state.listDataSource.cloneWithRows(listDatas),
            loaded: true,
        }) ;
    }

    render() {
        return (
            <View style={styles.movieViewStyle}>
                {this.renderTitleBar()}
                <ScrollView>
                    <ViewPager
                        style={{height:60}}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}
                        />
                    {this.renderCategoryView()}
                    {/**渲染热门电影布局**/}
                    {this.renderHotMovie()}
                    {/**推荐影院**/}
                    {this.renderRecommendMovie()}
                </ScrollView>
                {this.renderFolatView()}
            </View>
        );
    }

    /**
     * 渲染每张图片
     * @param data
     * @param pageID
     * @returns {XML}
     * @private
     */
    _renderPage(data, pageID) {
        return (
            <Image
                source={{uri:data}}
                style={styles.page}/>
        );
    }
    /**
     * 渲染标题栏
     */
    renderTitleBar() {
        return (
            <View style={styles.titleBarViewStyle}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        this.onBackClick()
                    }}>
                    <View style={{width: 30}}>
                        <Image source={{uri: 'food_ic_back_u'}} style={{width: 15, height: 15}}></Image>
                    </View>
                </TouchableOpacity>
                <Text style={styles.titleTextStyle}>看电影</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        this.searchClick()
                    }}>
                    <View style={{width: 30}}>
                        <Image source={{uri: 'main_ic_home_search'}} style={{width: 20, height: 20}}></Image>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 返回按钮
     */
    onBackClick() {
        this.props.navigator.pop();
    }

    /**
     * 搜索事件
     */
    searchClick() {
        alert("搜索了");
    }

    renderCategoryView() {
        return (
            <View style={styles.categoryViewStyle}>
                <HomeTopItemView
                    renderIcon={{uri: 'dianying'}}
                    text="影片"
                    position={1}
                />
                <HomeTopItemView
                    renderIcon={{uri: 'meishi'}}
                    text="影院"
                    position={0}
                />

                <HomeTopItemView
                    renderIcon={{uri: 'liren'}}
                    text="活动"
                    position={2}
                />
                <HomeTopItemView
                    renderIcon={{uri: 'jiudian'}}
                    text="社区服利"
                    position={3}
                />
            </View>
        );
    }

    /**
     * 热映电影view
     */
    renderHotMovie() {
        return (
            <View style={styles.hotMovieViewStyle}>

               <MoveArrowView
                leftTitle='热映电影'
                rightTitle='全部'
                onArrowClick={this.onClick}
               />

                <IndicatorViewPager
                    style={{height: 240, marginTop: 7}}
                    indicator={this.renderDotIndicator()}
                >
                    {this.renderViewPager()}
                </IndicatorViewPager>
            </View>
        )
    }

    onClick(title){
        switch (title){
            case '热映电影':
                alert(title) ;
                break ;
            case '推荐影院':
                alert(title) ;
                break ;
            case '查看更多影院':
                alert(title) ;
                break ;
        }

    }

    /**
     * 渲染悬浮View
     */
    renderFolatView() {
        return (
            <View style={styles.floatViewStyle}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        this.props.navigator.push({
                            //跳转到快速登录界面
                            component: QuickLogin
                        }) ;
                    }}>
                    <Image source={{uri: 'takeaway_footbar_personcenter_normal'}} style={{width: 60, height: 60}}/>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 返回指示器方法
     * @returns {XML}
     */
    renderDotIndicator() {
        return <PagerDotIndicator pageCount={3}
                                  selectedDotStyle={{backgroundColor: 'red'}}
        />;
    }

    renderViewPager() {
        //第页里面的数据
        let prePageView = [];
        var datas = hotMoviePagerData.data;
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i].movieInfo;
            prePageView.push(
                <View key={i} style={styles.preHotPagerViewStyle}>
                    {/**左边的View**/}
                    <View style={{flex: 1}}>
                        <Image
                            source={{uri: data[0].imgUrl}}
                            style={{flex: 1}}></Image>
                        <Text
                            style={{
                                position: 'absolute',
                                bottom: 3,
                                fontSize: 16,
                                color: 'white',
                                left: 3
                            }}>{data[0].title}</Text>
                    </View>
                    {/**右边的View**/}
                    <View style={{flex: 1, marginLeft: 3}}>
                        {/**以下是把View四等分占右半边的View**/}
                        <View style={{flexDirection: 'row', flex: 1}}>
                            {/**左上角View*/}
                            <View style={{flex: 1}}>
                                <Image
                                    source={{uri: data[1].imgUrl}}
                                    style={{flex: 1}}/>
                                <Text style={{
                                    position: 'absolute',
                                    bottom: 3,
                                    fontSize: 12,
                                    color: 'white',
                                    left: 3
                                }}>{data[1].title}</Text>
                            </View>
                            {/**右上角View*/}
                            <View style={{flex: 1, marginLeft: 3}}>
                                <Image
                                    source={{uri: data[2].imgUrl}}
                                    style={{flex: 1}}/>
                                <Text style={{
                                    position: 'absolute',
                                    bottom: 3,
                                    fontSize: 12,
                                    color: 'white',
                                    left: 3
                                }}>{data[2].title}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1, marginTop: 3}}>
                            {/**左下角View*/}
                            <View style={{flex: 1}}>
                                <Image
                                    source={{uri: data[3].imgUrl}}
                                    style={{flex: 1}}/>
                                <Text style={{
                                    position: 'absolute',
                                    bottom: 3,
                                    fontSize: 12,
                                    color: 'white',
                                    left: 3
                                }}>{data[3].title}</Text>
                            </View>
                            {/**右下角View*/}
                            <View style={{flex: 1, marginLeft: 3}}>
                                <Image
                                    source={{uri: data[4].imgUrl}}
                                    style={{flex: 1}}/>
                                <Text style={{
                                    position: 'absolute',
                                    bottom: 3,
                                    fontSize: 12,
                                    color: 'white',
                                    left: 3
                                }}>{data[4].title}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
        return prePageView;
    }
    //推荐影院view
    renderRecommendMovie(){
        return(
            <View style={styles.hotMovieViewStyle}>

                <MoveArrowView
                    leftTitle='推荐影院'
                    rightTitle='全部'
                    onArrowClick={this.onClick}
                />

                <ListView
                    style={{marginTop:8}}
                    dataSource={this.state.listDataSource}
                    renderRow={this.renderRow}
                />
                <MoveArrowView
                    leftTitle='查看更多影院'
                    isHideBtoomLine={true}
                    onArrowClick={this.onClick}
                />
            </View>
        );
    }

    renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=> {
                    ToastAndroid.show('你点击了 ' + rowID, ToastAndroid.SHORT)
                }}>
                <RecommendMvListItem
                    topTitle={rowData.title}
                    topLeftIcon={rowData.leftIcon}
                    topRightIcon={rowData.rightIcon}
                    centerText={rowData.money}
                    centerRightText={rowData.address}
                    marks = {rowData.marks}
                />
            </TouchableOpacity>
        );
    }
}

class ViewPageIndicator extends React.Component{
    render(){
        return(
            <View style={styles.haha}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    movieViewStyle: {
        flex: 1,
        backgroundColor: '#dddddd'
    },
    //标题栏样式
    titleBarViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.8,
        height: 47,
        paddingLeft: 3,
        paddingRight: 3,
    },
    titleTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    //悬浮View样式
    floatViewStyle: {
        position: 'absolute',
        bottom: 25,
        right: 15,
        padding: 10,
        alignItems: 'center'
    },
    //影片、影院,活动,等布局
    categoryViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white'
    },
    //热映 电影样式
    hotMovieViewStyle: {
        backgroundColor: 'white',
        borderTopColor: '#dddddd',
        borderTopWidth: 0.8,
        marginTop: 7,
        padding: 5,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.8
    },
    //热映 电影顶部view样式
    hotMovieTopViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hotViewTopViewText: {
        fontSize: 16,
    },
    //热映每页内容布局
    preHotPagerViewStyle: {
        flexDirection: 'row',
        marginBottom: 35
    },
    page: {
        flex: 1,
        height:60,
        resizeMode: 'stretch'
    }

});
