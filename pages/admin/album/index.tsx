import { useEffect } from 'react';
import firebase from '../../../firebase'

const Album = () => {
  useEffect(() => {
    const listItem = () => {
        firebase.storage().ref().child('images/').listAll()
          .then(res => {
            res.items.forEach((item) => {
                console.log(item);
            })
          })
          .catch(err => {
            alert(err.message);
          })
      }
      listItem()
  }, []);
  return <div>Enter</div>;
};

export default Album;
