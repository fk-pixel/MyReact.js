import React from 'react'
import {
    Card,
    Table,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import { products } from '../../data';
import React from "react";
import { Card, Table } from "react-bootstrap";


export function ProductTopCard() {
    return (
        <div>
            <Card className="mb-8">
                <Card.Body className="d-block mt-4 mb-2" style={{ lineHeight: "3rem" }}>
                    <Card.Title className={"mb-2"}>Beliebtesten Produkte</Card.Title>
                    <Table className={"mb-0"} borderless responsive>
                        <thead>
                            <tr>
                                <th scope="col" className={"pl-0"}>
                                    SKU
                                </th>
                                <th scope="col" className={"pl-0"}>
                                    Artikel
                                </th>
                                <th scope="col" className={"pl-0"}>
                                    Letzter Verkauf
                                </th>
                                <th scope="col" className={"pl-0"}>
                                    Monatlicher Verkauf
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 &&
                                products.map((item, index) => (
                                    <tr data={item} key={index}>
                                        <td className="fw-normal pl-0 fw-thin">
                                            <OverlayTrigger
                                                placement="top"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={<Tooltip id="button-tooltip-2">Auf Lager: {item.stock}</Tooltip>}>
                                                <i className={`fa fa-circle text-${item.stock > 10 ? "success" : "danger"} mr-3`} />
                                            </OverlayTrigger>
                                            {item.sku}
                                        </td>
                                        <td className={"pl-0 fw-thin"}>

                                            <img
                                                style={{
                                                    borderStyle: "none",
                                                    maxWidth: "100%",
                                                    height: "2.5rem",
                                                    width: "2.5rem",
                                                    borderRadius: "50%",
                                                    verticalAlign: "middle",
                                                }}
                                                src={item.imgUrl}
                                                alt={item.title}
                                                className={"mr-3"} />

                                            {item.title}
                                        </td>
                                        <td className={"pl-0 fw-thin"}>{item.orderdate}</td>
                                        <td className={"pl-3 fw-thin"}><button className="btn btn-sm btn-light">{item.monthlysale}</button></td>
                                    </tr>))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}