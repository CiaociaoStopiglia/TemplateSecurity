'use client'

import { Skeleton } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ReadPage() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarSeries() {
            try {
                const resp = await axios.get()
            } catch (error) {

            } finally {

            }
        }
    })
  return (
    <div>page</div>
  )
}
