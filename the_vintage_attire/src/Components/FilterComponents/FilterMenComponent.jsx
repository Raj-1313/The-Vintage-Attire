import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenData } from "../../Redux/AppReducer/App.actions";
import { Box, Checkbox, Flex, Select, Stack } from "@chakra-ui/react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
const FilterMenComponent = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [uniqueArr, setUniqueArr] = useState([]);
  const [eachItemLength, seteachItemLength] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSort = searchParams.get("sort");
  const [sort, setSort] = useState(initialSort || "");
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);
  const [FilterComponentText ,setFilterComponentText] = useState(false)
 
//for finding the unique types 
  const unique = data.filter((element) => {
    const isDuplicate = uniqueArr.includes(element.type);

    if (!isDuplicate) {
      uniqueArr.push(element.type);

      return true;
    }

    return false;
  });


//for handling the filter functionality
  const handleFilter = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  //for handling the sort functionality
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  // for setting up search params
  useEffect(() => {
    let params = {};
    params.type = category;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, sort,setSearchParams]); 


  //making an object so that we can find total items of every type
  useEffect(() => {
    dispatch(getMenData()).then((r) => setData(r.payload));
    console.log(data);
    data?.forEach((item, index) => {
      if (eachItemLength[item.type] === undefined) {
        eachItemLength[item.type] = 1;
      } else {
        eachItemLength[item.type]++;
      }
    });
  }, [data.length]);


  return (
    <Flex>
      {/* <Box display={'flex'} w='30%' border='1px solid black'>
        <Box onClick={()=>setFilterComponentText((p))}>{FilterComponentText ? 'Hide Filter' : 'Show Filter'}</Box>
        <Box></Box>
      </Box> */}
       <FilterMenComponentWrapper >
        {uniqueArr?.map((item, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                border: "1px solid black",
              }}
              key={index}
            >
              <label htmlFor="">
                {item}{" "}
                {Object.keys(eachItemLength).length > 0
                  ? `(${eachItemLength[item]})`
                  : ""}
              </label>
              <Checkbox
                onChange={handleFilter}
                colorScheme="green"
                value={item}
              ></Checkbox>
            </div>
          );
        })}
      </FilterMenComponentWrapper>
      
      <Box>
        <Select placeholder="Featured" onChange={handleSort}>
          <option value="asc">Price: Low - High</option>
          <option value="desc">Price: High - Low</option>
          <option value="inc">Sort: A - Z</option>
          <option value="dec">Sort: Z - A</option>
          {/* <option value='option3'>Option 3</option> */}
        </Select>
      </Box>
    </Flex>
  );
};

export default FilterMenComponent;

const FilterMenComponentWrapper = styled.div`
display: flex;
  flex-direction: column;
  padding: 2rem;
`;
