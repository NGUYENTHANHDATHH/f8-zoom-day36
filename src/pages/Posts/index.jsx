import { useState, useEffect, use } from "react";
import { Link, useSearchParams } from "react-router";

import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

function Posts() {
    const [params, setParams] = useSearchParams();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(() => params.get('page'));
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => {
                const total = data.length;
                const limit = 20;
                setTotalPages(Math.ceil(total / limit));
            }
            );
    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [page]);

    useEffect(() => {
        setParams({ page });
    }, [page, setParams]);
    if (data.length === 0) return <div><Loading /></div>;

    return (
        <>
            {data.map(item => (
                <div key={item.id}>
                    <Link to={`/post/${item.id}`}>
                        {item.id}. {item.title}
                    </Link>
                </div>
            ))}

            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </>
    );
}

export default Posts;
