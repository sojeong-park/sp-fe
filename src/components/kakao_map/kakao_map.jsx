import React, {useEffect, useState} from 'react';
import styles from './kakao_map.module.css';

function KakaoMap() {
    const { kakao }= window;
    let map = '';
    
    useEffect( () => {
        onLoadMainMap();
    }, []);

    const onLoadMainMap = () => {
        if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition((position) => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                
                if (latitude === "" || longitude === "") {
                    latitude = 33.450701;
                    longitude = 126.570667;
                }
                
                let container = document.getElementById('kakaoMap');
                let options = {
                    center: new kakao.maps.LatLng(latitude, longitude),
                    level: 3
                };
                map = new kakao.maps.Map(container, options); //지도생성
                
                kakao.maps.event.addListener(map, 'dragend', function() {        
                    let latlng = map.getCenter(); 
                    let options = {
                        center: new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()),
                        level: 3
                    };
                    showConvenience();
                });    
                showConvenience();          
            });
        }
    };

    const showConvenience = () => {
        // 장소 검색 객체를 생성합니다
        const ps = new kakao.maps.services.Places(map);
        // 카테고리로 편의점을 검색합니다
        ps.categorySearch('CS2', placesSearchCB, {useMapBounds:true});  
    }
    const placesSearchCB = (data, status, pagination) => {
        console.log("placesSearchCB map data");
        if (status === kakao.maps.services.Status.OK) {
            for (var i=0; i<data.length; i++) {
                displayMarker(data[i]);
            }
        }       
    }

    const displayMarker = (place) => {
        //마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        const infowindow = new kakao.maps.InfoWindow({zIndex:1});
        //마커를 생성하고 지도에 표시합니다
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });
    
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            console.log(place); // 클릭시 장소 정보 호출
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
    }

    return (
        <section className={styles.container}>
            <div id="kakaoMap" className={styles.kakaoMap}/>
        </section>
        
    );
}

export default KakaoMap;