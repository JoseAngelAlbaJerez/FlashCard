import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../atoms/button';
import FABButton from '../../atoms/fab-button';
import Overlay from '../../atoms/overlay';
import TextInput from '../../atoms/text-input';
import { cards } from '../../../api/db';
import { COLORS, COMPONENT, FONT } from '../../../constants/style.contstants';
import { useUser } from '../../../hooks/auth';
import { useForm } from '../../../hooks/form';
import { useModal } from '../../../hooks/modal';
import { useRoute } from '@react-navigation/native';


const baseState = () => ({
  front: '',
  back: '',
  detail: '',
});

function AddCard() {
  const [form, setForm] = useForm(baseState());
  const { params: { category } } = useRoute();
  const [user] = useUser();
  const { visible, show, hide } = useModal();

  const createCard = () => {
    cards.add({
      ...form,
      categoryId: category.id,
      userId: user.uid,
    });

    hide();
  };

  const { front, back, detail } = form;

  return (
    <View>
      <FABButton
        icon={{ name: 'add', color: 'white' }}
        color={COLORS.highlight}
        onPress={show}
        size="small"
      />

      <Overlay
        isVisible={visible}
        onBackdropPress={hide}
        overlayStyle={{
          width: '80%',
          backgroundColor: COLORS.main,
          padding: 36,
          borderRadius: 12,
        }}
      >
        <View>
          <Text style={{ ...FONT.h3, color: COLORS.textLight }}>New Card</Text>

          <TextInput
            style={{
              borderBottomColor: COLORS.textLight,
              borderBottomWidth: 1,
              color: COLORS.textLight,
              marginVertical: 12,
              padding: 12,
              paddingBottom: 6,
            }}
            placeholderTextColor={COLORS.textLight}
            placeholder="Front"
            onChangeText={(value) => setForm({ value, key: 'front' })}
            value={front}
          />

          <TextInput
            style={{
              borderBottomColor: COLORS.textLight,
              borderBottomWidth: 1,
              color: COLORS.textLight,
              marginVertical: 12,
              padding: 12,
              paddingBottom: 6,
            }}
            placeholderTextColor={COLORS.textLight}
            placeholder="Back"
            onChangeText={(value) => setForm({ value, key: 'back' })}
            value={back}
          />

          <TextInput
            style={{
              borderBottomColor: COLORS.textLight,
              borderBottomWidth: 1,
              color: COLORS.textLight,
              marginVertical: 12,
              padding: 12,
              paddingBottom: 6,
            }}
            placeholderTextColor={COLORS.textLight}
            placeholder="Detail"
            onChangeText={(value) => setForm({ value, key: 'detail' })}
            value={detail}
          />

          <CustomButton
            titleStyle={{
              ...FONT.button,
              color: COLORS.main,
            }}
            buttonStyle={{
              ...COMPONENT.button.highlight,
              width: '40%',
              alignSelf: 'flex-end',
              marginTop: 24,
            }}
            title="Add"
            onPress={createCard}
          />
        </View>
      </Overlay>
    </View>
  );
}

export default AddCard;