
import React from 'react';
import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { useInfiniteQuery } from 'react-query'

import Card from "../../components/Card";
import { fetchProductList } from '../../api';


function Products() {
  const { data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status, } = useInfiniteQuery('products', fetchProductList,
      {
        getNextPageParam: (lastGroup, allGroup) => {
          const morePagesExist = lastGroup?.length === 12;

          if (!morePagesExist) {
            return;
          }
          return allGroup.length + 1;
        }
      })

  if (status === "loading") return 'Loading...'

  if (status === error) return 'An error has occurred: ' + error.message

  console.log(data)
  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>

        {/* {
          data.map((item, i) => (
            <Card key={i} item={item} />
          ))
        } */}

        {
          data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {
                group.map((item) => (
                  <Box w="100" key={item._id} >
                    <Card item={item} />
                  </Box>
                ))
              }
            </React.Fragment>
          ))
        }
      </Grid>
      <Flex mt="10" justify="center">
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetching}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </Button>
      </Flex>
    </div>
  )
}

export default Products;