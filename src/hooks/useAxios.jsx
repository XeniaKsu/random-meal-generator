

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try{
      setLoading(true);
      const res = await axios('www.themealdb.com/api/json/v1/1/randomselection.php')

    }catch(err){

    } finally {

    }
  }
  return {

  }


};

export default useAxios;
