'use client'

import { useEffect, useState } from "react";
import Validation from "../UI/getUserId/Validation";
const CustomerPhoto = ({userId}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://cdn.zipperconnect.space/customer/settings/client/photo/${userId}`);
        if (response.ok && window.Telegram && window.Telegram.WebApp) {
          const imageUrl = `https://cdn.zipperconnect.space/customer/settings/client/photo/${userId}`;

          // Проверка, было ли изменено изображение в CloudStorage
          window.Telegram.WebApp.CloudStorage.getItems(["userImage"], (err, values) => {
            if (!err && values.userImage === imageUrl) {
              // Изображение в CloudStorage не изменилось, используем его
              setImageSrc(values.userImage);
            } else {
              
              window.Telegram.WebApp.CloudStorage.removeItem("userImage", (err, removed) => {
                if (err) {
                  console.error("Error removing previous image URL from CloudStorage", err);
                } else {
                }

                window.Telegram.WebApp.CloudStorage.setItem("userImage", imageUrl, (err, saved) => {
                  if (err) {
                    console.error("Error saving image URL to CloudStorage", err);
                  } else {
                  }

                  setImageSrc(imageUrl);
                });
              });
            }
          });
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (err) {
        setError(err);
      }
    };

    // Извлечение изображения из Telegram WebApp CloudStorage
    window.Telegram.WebApp.CloudStorage.getItems(["userImage"], (err, values) => {
      if (!err && values.userImage) {
        // Проверка, что URL не является Blob URL
        if (!values.userImage.startsWith("blob:")) {
          // Изображение в CloudStorage не является Blob URL, используем его
          setImageSrc(values.userImage);
          console.log("Image URL retrieved from CloudStorage");
        } else {
          // Если изображение отсутствует в CloudStorage, выполнить запрос к серверу
          fetchImage();
        }
      } else {
        // Если изображение отсутствует в CloudStorage, выполнить запрос к серверу
        fetchImage();
      }
    });
  }, [userId]);
    
    return (
      <>
      {imageSrc ? (
        <div className="usercard_avatar">
          <img src={imageSrc} className="usercard_avatar_img" alt="User Avatar" loading="eager"/>
        </div>
      ) : (
        <div className="usercard_avatar">
          <div className="usercard_avatar_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="314" height="251" viewBox="0 0 314 251" fill="none">
              {/* SVG для отображения логотипа, если изображение отсутствует */}
            </svg>
          </div>
        </div>
      )}
    </>
    );
};

export default CustomerPhoto;