import {
  Button,
  CloseButton,
  Flex,
  Heading,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { createToggleAtom } from '../../atoms';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

const CreateProductForm = () => {
  const [createToggle, setCreateToggle] = useAtom(createToggleAtom);
  const toast = useToast();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    const response = await api.post('/api/products', data);
    if (response.status === 201) {
      toast({
        title: `Produto ${data.name} criado.`,
        description: `Atualize as vendas caso seja necessário.`,
        status: 'success',
        duration: 3000,
      });
      setCreateToggle(!createToggle);
    }
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      position="fixed"
      bgColor="blackAlpha.400"
      justifyContent="center"
      alignItems="center"
      zIndex={2}
    >
      <Flex
        p={5}
        maxW="600px"
        maxH="600px "
        bgColor="#FAFAFA"
        direction="column"
        alignItems="center"
      >
        <Flex w="100%" p={2} justifyContent="space-between">
          <Heading size="md">Criar Produto</Heading>
          <CloseButton onClick={() => setCreateToggle(!createToggle)} />
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Flex direction="column" m="0 auto" w="80%" gap={5}>
            <Input
              {...register('name')}
              placeholder="Informe um nome"
              required
            />
            <Input
              {...register('price', { valueAsNumber: true })}
              placeholder="Informe um preço"
              type="number"
              step="0.01"
              required
            />
            <Input
              {...register('stock', { valueAsNumber: true })}
              placeholder="Qtd em estoque"
              type="number"
              required
            />
            <Button colorScheme="blue" alignSelf="center" type="submit">
              Criar
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default CreateProductForm;
