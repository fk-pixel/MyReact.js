import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Card, Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import {truncate} from "lodash";

export function ProductTopCard() {
  const access = useSelector((state) => state.auth.access);
  const [top10Artikel, setTop10Artikel] = useState([]);
  const [selectedTop10Artikel, setSelectedTop10Artikel] = useState([]);
  const [startDate, /* setStartDate */] = useState(
    moment()
      .add(-30, "d")
      .format("YYYY-MM-DD")
  );
  const [endDate, /* setEndDate */] = useState(moment().format("YYYY-MM-DD"));
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();
  const [isSearch, setIsSearch] = useState(false)
  const [showCard, setShowCard] = useState(true);
  
  useEffect(() => {
    axios
      .get(
        `https://${access.apiUrl}/api/remotes/getUmsatz?access_token=${access.client.id}`,
        {
          params: {
            Datum: {
              startDate: startDate,
              endDate: endDate,
              fuer: "top10artikel",
            },
          },
        }
      )
      .then((res) => res.data)
      .then((data) => {
        setTop10Artikel(data);
      })
      .catch((err) => console.log(err));
  }, [access.apiUrl, access.client.id, endDate, startDate]);

  const newRequest = useCallback(async () => {
      if (!isSearch) {
        setIsSearch(true)
      await axios
      .get(
        `https://${access.apiUrl}/api/remotes/getUmsatz?access_token=${access.client.id}`,
        {
          params: {
            Datum: {
              startDate: selectedStartDate,
              endDate: selectedEndDate,
              fuer: "top10artikel",
            },
          },
        }
      )
      .then((res) => res.data)
      .then((data) => {
        setSelectedTop10Artikel(data);
      })
      .catch((err) => console.log(err));
      setIsSearch(false)
      setTop10Artikel([])
      } 
    },
    [access.apiUrl, access.client.id, isSearch, selectedStartDate, selectedEndDate],
  );
  
//console.log(selectedEndDate);
//console.log(selectedStartDate);
//console.log(selectedTop10Artikel)
  return (
    <div>
      <Card className="mb-8">
        <Card.Body >
          <div className="d-flex flex-row justify-content-between">
            <Card.Title className={"mb-2"}>Top 10 Artikel</Card.Title>
            <div className="d-flex flex-row mb-4">
            <input  
              className="form-control"
              name="select-start"
              max={new Date().toLocaleDateString('en-ca')}
              type={"date"}
              onChange={(e) => setSelectedStartDate(e.target.value)}
            />
            <input 
              className="form-control"
              name="select-end"
              min={selectedStartDate}
              type={"date"} 
              onChange={(e) => setSelectedEndDate(e.target.value)}
            />
            <button
              className="btn btn-dark btn-sm ml-2" 
              disabled={!selectedEndDate} 
              onClick={newRequest}
            >Suchen</button>
            </div>
            
            <OverlayTrigger
            key="bottom"
            overlay={
              <Tooltip id="bottom">
                {showCard ? "Verstecken" : "Zeigen"}
              </Tooltip>
            }
          >
            <p
              className="cursor-pointer"
              onClick={() => setShowCard(!showCard)}>
              <i className={`far fa-eye-slash fa-sm text-${showCard ? "gray" : "alternate"}`}></i>
            </p>
          </OverlayTrigger>
          </div>
          {showCard && (
            <Table 
            style={{ lineHeight: "3rem" }}
            striped hover>
              <thead>
                <tr>
                  <th className="fw-normal pl-0 fw-thin p-0">
                    SKU
                  </th>
                  <th className="fw-normal pl-0 fw-thin p-0">
                    Name
                  </th>
                  <th className="fw-normal pl-0 fw-thin p-0">
                    Anzahl
                  </th>
                  <th style={{textAlign:"right"}} className="fw-normal pl-0 fw-thin p-0">
                    Umsatz
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedTop10Artikel.length > 0 && 
                  selectedTop10Artikel
                  .map((data, index) => (
                    <tr data={data} key={index}>
                      <td className="fw-normal pl-0 fw-thin p-0">{data.sku}</td>
  
                      <td className={"pl-0 fw-thin p-0"}>{truncate(data.title,{'length':40,'separator':' '})}</td>
  
                      <td className={"pl-0 fw-thin p-0"}>{data.quantity}</td>
                      <td style={{textAlign:"right"}} className={"pl-0 fw-thin p-0"}>{data.brutto.toFixed(2)}<span style={{textAlign:"right"}}> €</span></td>
                    </tr>
                  ))}
                  {top10Artikel.length > 0 &&
                    top10Artikel
                    .map((data, index) => (
                      <tr data={data} key={index}>
                      <td className="fw-normal pl-0 fw-thin p-0">{data.sku}</td>
  
                      <td className={"pl-0 fw-thin p-0"}>{truncate(data.title,{'length':40,'separator':' '})}</td>
  
                      <td className={"pl-0 fw-thin p-0"}>{data.quantity}</td>
                      <td style={{textAlign:"right"}} className={"pl-0 fw-thin p-0"}>{data.brutto.toFixed(2)}<span style={{textAlign:"right"}}> €</span></td>
                    </tr>
                  ))} 
              </tbody>
            </Table>
          )}
          
        </Card.Body>
      </Card>
    </div>
  );
}