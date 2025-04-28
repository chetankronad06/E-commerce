import React from 'react'
import requiredUser from '@/hooks/requiredUser';
import Container from '@/components/Container';

const OrderPage = async() => {
    await requiredUser()
  return (
    <Container className="py-10">
        order page
      
    </Container>
  )
}

export default OrderPage
