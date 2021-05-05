class KakaoMapApi {
    constructor() {
        this.latitude = "";
        this.longitude = "";
        this.container = "";
        this.options = "";
        this.map = "";
    }

    onLoadMainMap(){
        const { kakao }= window;

        /**
         * 현재 위치로 지도 초기 세팅
         */
        if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                
                if (this.atitude === "" || this.longitude === "") {
                    this.latitude = 33.450701;
                    this.longitude = 126.570667;
                }
                
                this.container = document.getElementById('kakaoMap');
                this.options = {
                    center: new kakao.maps.LatLng(this.latitude, this.longitude),
                    level: 3
                };
                this.map = new kakao.maps.Map(this.container, this.options); //지도생성
                this.showConvenience();
                //this.makeMark();
                console.log('지도 초기화');
            });
        }
    }

    makeMark(){
        const { kakao }= window;
        //onst map = new kakao.maps.Map(this.container, this.options); // this.map 으로 쓴다.
        console.log("mark?");
        // 마커가 표시될 위치입니다 
        const markerPosition  = new kakao.maps.LatLng(this.latitude, this.longitude); 
        console.log("마커함수에서?"+this.latitude +","+ this.longitude)
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(this.map);
    }
    
    /**
     * 내 근방 편의점 보여주기!
     */
    showConvenience(){
        const { kakao }= window;
        // 장소 검색 객체를 생성합니다
        const ps = new kakao.maps.services.Places(this.map);
        console.log("편의점 보여주기 함수 호출 && map"+this.map);
        // 카테고리로 편의점을 검색합니다
        ps.categorySearch('CS2', this.placesSearchCB, {useMapBounds:true}); 
    }
    /**
     * 키워드 검색 완료 시 호출되는 콜백함수 입니다
     * @param {*} data 
     * @param {*} status 
     * @param {*} pagination 
     */
    placesSearchCB (data, status, pagination) {
        const { kakao }= window;
        console.log('콜백함수');
        if (status === kakao.maps.services.Status.OK) {
            for (var i=0; i<data.length; i++) {
                console.log(data[i]);
                //console.log("check2"+this.map);
                const infowindow = new kakao.maps.InfoWindow({zIndex:1});
                //console.log("check3"+this.map);
                const marker = new kakao.maps.Marker({
                    //map: this.map,
                    position: new kakao.maps.LatLng(data[i].y, data[i].x) 
                });
                //marker.setMap(this.map);
                kakao.maps.event.addListener(marker, 'click', function() {
                    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                    infowindow.setContent('<div style="padding:5px;font-size:12px;">' + data[i].place_name + '</div>');
                    infowindow.open(this.map, marker);
                });
                //this.displayMarker(data[i]);    
            }
        }       
    }

    /**
     * 지도에 마커 표시
     * @param {*} place 
     */
    displayMarker(place) {
        //const { kakao }= window;
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        //const infowindow = new kakao.maps.InfoWindow({zIndex:1});
        // 마커를 생성하고 지도에 표시합니다
        // const marker = new kakao.maps.Marker({
        //     map: this.map,
        //     position: new kakao.maps.LatLng(place.y, place.x) 
        // });
    
        // // 마커에 클릭이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, 'click', function() {
        //     // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        //     infowindow.open(this.map, marker);
        // });
    }
}

export default KakaoMapApi; 