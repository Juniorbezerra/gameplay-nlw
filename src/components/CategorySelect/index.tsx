import React from "react";
import { Container } from "./styles";
import { CategoryItem } from "../CategoryItem";
import {categories} from '../../utils/categories';

interface Props {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?:boolean;
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false
}:Props) {

  return(
    <Container 
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingRight:40}}
    >
      {
        categories.map(category =>(
          <CategoryItem 
            key={category.id} 
            title={category.title} 
            icon={category.icon}
            onPress={()=>setCategory(category.id)} 
            checked={category.id == categorySelected} 
            hasCheckBox={hasCheckBox}
          />
        ))
      }
    </Container>
  )
  
}