import React, { useState, useEffect } from 'react';
import { Card, Table, Typography } from 'antd';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { firestore } from '../../../config/firebase';
import { useAuthContext } from '../../../contexts/AuthContext';

const { toastify } = window;
const { Title } = Typography;

export default function Recent() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuthContext();

    const getData = async () => {
        setIsLoading(true);
        try {
            const q = query(collection(firestore, "orderPlaced"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const items = querySnapshot.docs.map(doc => {
                const { name,items, total, createdAt, address } = doc.data();
                return {
                    key: doc.id, items, total, createdAt, address, name,
                    itemsDetails: items.map(item => ({
                        name: item.name,
                        quantity: item.quantity
                    }))
                };
            });
            setData(items);
        } catch (error) {
            console.error("Error fetching order data: ", error);
            toastify("Something went wrong while fetching orders", "error");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            getData();
        }
    }, [user]);

    const columns = [
        { title: 'Order Date and time', dataIndex: 'createdAt', key: 'createdAt', render: (text) => new Date(text).toLocaleString(), },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
            title: 'Items', key: 'itemsDetails',
            render: (_, record) => (
                <ul>
                    {record.itemsDetails.map((item, index) => (
                        <li key={index}>
                            {item.name} - Quantity: {item.quantity}
                        </li>
                    ))}
                </ul>
            ),
        },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Total', dataIndex: 'total', key: 'total', render: (text) => `Rs. ${text}`, },
    ];

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center px-1 py-3'>
                <Title className='text-center p-4'>Recent Orders</Title>
                <Card style={{ width: '95%', maxWidth: '1200px', margin: '0 auto', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', overflowX: 'auto' }}>
                    <Table dataSource={data} columns={columns} pagination={false} rowKey="key" loading={isLoading} rowClassName={() => "custom-row"} scroll={{ x: true }} />
                </Card>
            </div>
        </>

    );
}
