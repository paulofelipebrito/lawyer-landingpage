'use client';

import { useState } from "react";
import { ContentType } from ".";
import Card from "../Card";
import Modal from "../Modal";

type Props = {
  content: ContentType[]
}

const ListService = ({content}: Props) => {
  const [selectedService, setSelectedService] = useState({} as ContentType);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = (contentObj: ContentType) => {
    setIsModalVisible(true);
    setSelectedService((prevState) => prevState.id === contentObj.id ? {} as ContentType : contentObj);
  }
  
  const handleCloseModal = () => {
    setIsModalVisible(false);
    
    setTimeout(() => {
      setSelectedService({} as ContentType);
    }, 300);
  }
  
  return (
    <>
      <ul className='flex flex-wrap items-center justify-between w-full'>
        {content.map((el) => (
          <Card key={el.id} contentObj={el} onOpenModal={handleOpenModal}/>
        ))}
      </ul>
      <Modal 
          title={selectedService.title} 
          visible={isModalVisible}
          onCancel={handleCloseModal}
          isLoading={Object.keys(selectedService).length > 0}
        >
          <div>
            {selectedService?.text?.split("<br />").map((el) => (
              <>
                <p key={el} className="text-[#333333] text-base">{el}</p>
                <br></br>
              </>
            ))}
          </div>
      </Modal>
    </>
  )
}

export default ListService