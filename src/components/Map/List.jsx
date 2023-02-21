import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";

const List = () => {
  const items = useSelector( state => state.items)
  
  console.log('items: ',items)
  return (
    <ul className="listWrap">
      {items&&items.map((item, index) => (
        <Card key={index} title={item.careNm} extra={<a href="#">More</a>}>
          <p>
            {item.saveTrgtAnimal ? (
              <span>구조대상동물 : {item.saveTrgtAnimal}</span>
            ) : (
              <></>
            )}
          </p>
          <p>주소 : {item.careAddr}</p>
          <p>전화번호 : {item.careTel}</p>
          <p>
            {item.weekOprStime && item.weekOprEtime ? (
              <span>
                평일 운영시간 : {item.weekOprStime}~{item.weekOprEtime}
                &nbsp; &nbsp; &nbsp;
              </span>
            ) : (
              <></>
            )}
            {item.weekCellStime && item.weekCellEtime ? (
              <span>
                평일 분양시간 : {item.weekCellStime}~{item.weekCellEtime}
              </span>
            ) : (
              <></>
            )}
          </p>
          <p>
            {item.weekendOprStime ? (
              <span>
                주말 운영시간 : {item.weekendOprStime}~{item.weekendOprEtime}
                &nbsp; &nbsp; &nbsp;
              </span>
            ) : (
              <></>
            )}
            {item.weekendCellStime ? (
              <span>
                주말 분양시간 : {item.weekendCellStime}~{item.weekendCellEtime}
              </span>
            ) : (
              <></>
            )}
          </p>
          <p>{item.closeDay ? <span>휴무일 : {item.closeDay}</span> : <></>}</p>
          <p>
            {item.vetPersonCnt ? (
              <span>
                수의사 인원수 : {item.vetPersonCnt}&nbsp; &nbsp; &nbsp;
              </span>
            ) : (
              <></>
            )}
            {item.specsPersonCnt ? (
              <span>사양관리사 인원수 : {item.specsPersonCnt}</span>
            ) : (
              <></>
            )}
          </p>
          <p>
            {item.medicalCnt ? (
              <span>진료실수 : {item.medicalCnt}&nbsp; &nbsp; &nbsp;</span>
            ) : (
              <></>
            )}
            {item.breedCnt ? (
              <span>사육실수 : {item.breedCnt}&nbsp; &nbsp; &nbsp;</span>
            ) : (
              <></>
            )}
            {item.quarabtineCnt ? (
              <span>격리실수 : {item.quarabtineCnt}&nbsp; &nbsp; &nbsp;</span>
            ) : (
              <></>
            )}
            {item.transCarCnt ? (
              <span>구조운반용차량보유대수 : {item.transCarCnt}</span>
            ) : (
              <></>
            )}
          </p>
        </Card>
      ))}
    </ul>
  );
};

export default List;