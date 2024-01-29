import React, { useState } from 'react';
import './order.css'
import person from '../../assets/person2.png'
import icon from '../../assets/document-download.png'

function Order(props) {
    return (
        <>
        <div className='orderContainer'>
            <div className='charttop'>
                <p>Last Order</p>
                <a href=""><p style={{color: 'rgb(45, 240, 38)'}}>See All</p></a>
            </div>
            <div className='orderTableBodyTop'>
                <p style={{width:'25%', flexBasis: 100}}>Name</p>
                <p style={{width:'18.75%', flexBasis: 100, marginLeft: '7.5em'}}>Date</p>
                <p style={{width:'18.75%', flexBasis: 100, marginLeft: 0}}>Ammount</p>
                <p style={{width:'18.75%', flexBasis: 100, marginLeft: 0}}>Status</p>
                <p style={{width:'18.75%', flexBasis: 100}}>Invoice</p>
            </div>
            <div className='orderTableBody'>
                <div className='face'>
                    <img src={person} style={{width: 35, marginRight:10, borderRadius: '50%'}} alt="" />
                    <p>Marcus Bergson</p>
                </div>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>Nov 15, 2024</p>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>$80,0000</p>
                <p style={{color:'green', width:'18.75%', flexShrink: 0, flexBasis: 100}}>paid</p>
                <div style={{width:'18.75%', flexShrink: 0, flexBasis: 100}} className='view'>
                <img src={icon} alt="" />
                <a href="#" onClick={()=>{props.openPrintModal({
                    name:'Marcus Bergson',
                    date:'Nov 15, 2024',
                    price:'$80,0000'})}}
                ><p style={{color: 'black', paddingLeft:5}}>view</p></a>
                </div>
            </div>
            <div className='orderTableBody'>
                <div className='face'>
                    <img src={person} style={{width: 35, marginRight:10, borderRadius: '50%'}} alt="" />
                    <p>Jaydon Vaccaro</p>
                </div>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>Nov 15, 2024</p>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>$150,0000</p>
                <p style={{color:'green', width:'18.75%', flexShrink: 0, flexBasis: 100}}>paid</p>
                <div style={{width:'18.75%', flexShrink: 0, flexBasis: 100}} className='view'>
                <img src={icon} alt="" />
                <a href="#" onClick={()=>{props.openPrintModal({
                    name:'Jaydon Vaccaro',
                    date:'Nov 15, 2024',
                    price:'$150,0000'})}}
                ><p style={{color: 'black', paddingLeft:5}}>view</p></a>
                </div>
            </div>
            <div className='orderTableBody'>
                <div className='face'>
                    <img src={person} style={{width: 35, marginRight:10, borderRadius: '50%'}} alt="" />
                    <p>Corey Schiefer</p>
                </div>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>Nov 15, 2024</p>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>$87,0000</p>
                <p style={{color:'red', width:'18.75%', flexShrink: 0, flexBasis: 100}}>refund</p>
                <div style={{width:'18.75%', flexShrink: 0, flexBasis: 100}} className='view'>
                <img src={icon} alt="" />
                <a href="#" onClick={()=>{props.openPrintModal({
                    name:'Corey Schiefer',
                    date:'Nov 15, 2024',
                    price:'$87,0000'})}}
                ><p style={{color: 'black', paddingLeft:5}}>view</p></a>
                </div>
            </div>
            <div className='orderTableBody'>
                <div className='face'>
                    <img src={person} style={{width: 35, marginRight:10, borderRadius: '50%'}} alt="" />
                    <p>Cooper Press</p>
                </div>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>Nov 15, 2024</p>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>$100,0000</p>
                <p style={{color:'green', width:'18.75%', flexShrink: 0, flexBasis: 100}}>paid</p>
                <div style={{width:'18.75%', flexShrink: 0, flexBasis: 100}} className='view'>
                <img src={icon} alt="" />
                <a href="#" onClick={()=>{props.openPrintModal({
                    name:'Cooper Press',
                    date:'Nov 15, 2024',
                    price:'$100,0000'})}}
                ><p style={{color: 'black', paddingLeft:5}}>view</p></a>
                </div>
            </div>
            <div className='orderTableBody'>
                <div className='face'>
                    <img src={person} style={{width: 35, marginRight:10, borderRadius: '50%'}} alt="" />
                    <p>Phillip Lubin</p>
                </div>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>Nov 15, 2024</p>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>$78,0000</p>
                <p style={{color:'red', width:'18.75%', flexShrink: 0, flexBasis: 100}}>refund</p>
                <div style={{width:'18.75%', flexShrink: 0, flexBasis: 100}} className='view'>
                <img src={icon} alt="" />
                <a href="#" onClick={()=>{props.openPrintModal({
                    name:'Phillip Lubin',
                    date:'Nov 15, 2024',
                    price:'$78,0000'})}}
                ><p style={{color: 'black', paddingLeft:5}}>view</p></a>
                </div>
            </div>
            <div className='orderTableBody'>
                <div className='face'>
                    <img src={person} style={{width: 35, marginRight:10, borderRadius: '50%'}} alt="" />
                    <p>Marcus Bergson</p>
                </div>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>Nov 15, 2024</p>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>$80,0000</p>
                <p style={{color:'green', width:'18.75%', flexShrink: 0, flexBasis: 100}}>paid</p>
                <div style={{width:'18.75%', flexShrink: 0, flexBasis: 100}} className='view'>
                <img src={icon} alt="" />
                <a href="#" onClick={()=>{props.openPrintModal({
                    name:'Marcus Bergson',
                    date:'Nov 15, 2024',
                    price:'$80,0000'})}}
                ><p style={{color: 'black', paddingLeft:5}}>view</p></a>
                </div>
            </div>
            <div className='orderTableBody'>
                <div className='face'>
                    <img src={person} style={{width: 35, marginRight:10, borderRadius: '50%'}} alt="" />
                    <p>Nick Walker</p>
                </div>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>Nov 15, 2024</p>
                <p style={{width:'18.75%', flexShrink: 0, flexBasis: 100}}>$120,0000</p>
                <p style={{color:'red', width:'18.75%', flexShrink: 0, flexBasis: 100}}>refund</p>
                <div style={{width:'18.75%', flexShrink: 0, flexBasis: 100}} className='view'>
                <img src={icon} alt="" />
                <a href="#" onClick={()=>{props.openPrintModal({
                    name:'Nick Walker',
                    date:'Nov 15, 2024',
                    price:'$120,0000'})}}
                ><p style={{color: 'black', paddingLeft:5}}>view</p></a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Order;