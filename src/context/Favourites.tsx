import { Children, createContext, ReactNode, useContext, useState } from "react"

type FavouritesProviderProps={
    children:ReactNode;
}

type CartItem={
    imdbId:string;
    quantity:number;
}

type FavouriteContext={
    getItemQuantity:(imdbID:string)=>void;
    removeFromFavourites:(imdbID:string)=>void
}

const FavouriteContext= createContext({})

export function useFavourites(){
    return useContext(FavouriteContext)
}
export function FavouritesProvider({children}:FavouritesProviderProps){
   const [cartItems,setcartItem]=useState<CartItem[] >([])

   function getItemQuantity(imdbID:string){
    return cartItems.find(item=>item.imdbId===imdbID)?.quantity||0
   }

   function removeFromCart(imdbId:string){
    setcartItem(currItems=>{
        return currItems.filter(item=> imdbId !== imdbId)
    })
   }
    return(
    <FavouriteContext.Provider value={{getItemQuantity,removeFromCart}}>
        {children}
    </FavouriteContext.Provider>
   )
}