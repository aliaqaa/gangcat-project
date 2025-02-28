import React, { useState } from 'react';  
import useGetCats from '../../Hooks/useGetCats';  
import Modal from './Modal'; // Update the path as necessary  
import GangCatLoading from '../Loadings/GangCatLoading';
import Pagination from '../Cats/CatsPagination/Pagination';
function GalleryIndex() {  
    const { data, loading, error } = useGetCats("/cats/gallery");  
    const [isModalOpen, setModalOpen] = useState(false);  
    const [selectedImg, setSelectedImg] = useState('');  
    
    // Pagination state  
    const [currentPage, setCurrentPage] = useState(1);  
    const itemsPerPage = 6; // Set the number of items per page  

    // Calculate displaying items  
    const indexOfLastItem = currentPage * itemsPerPage;  
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;  
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);  

    const openModal = (imgUrl) => {  
        setSelectedImg(imgUrl);  
        setModalOpen(true);  
    };  

    const closeModal = () => {  
        setModalOpen(false);  
        setSelectedImg('');  
    };  

    // Calculate total pages  
    const totalPages = Math.ceil(data.length / itemsPerPage);  

    const handleNextPage = () => {  
        if (currentPage < totalPages) {  
            setCurrentPage(currentPage + 1);  
        }  
    };  

    const handlePrevPage = () => {  
        if (currentPage > 1) {  
            setCurrentPage(currentPage - 1);  
        }  
    };  

    if (loading) return <p><GangCatLoading/></p>;  
    if (error) return <p>Error loading images.</p>;  

    return (  
        <div>  
            <div className='grid grid-cols-2 container m-auto my-10 gap-5'>  
                {currentItems.map(item => (  
                    <div key={item._id} className='flex flex-col justify-center'>  
                        <img   
                            src={item.imgUrl}   
                            alt="gang"   
                            className='p-10 m-auto cursor-pointer'   
                            onClick={() => openModal(item.imgUrl)}   
                        />  
                        <h1 className='text-orange-600 text-2xl'>{item.description}</h1>  
                    </div>  
                ))}  
                <Modal isOpen={isModalOpen} onClose={closeModal} imgUrl={selectedImg} />  
            </div>  
            {/* Pagination Controls */}  
            <Pagination   
                page={currentPage}   
                setPage={setCurrentPage}   
                totalPages={totalPages}   
            />    
            
        </div>  
    );  
}  

export default GalleryIndex;  