import { View, TextInput, StyleSheet, Text, Button } from 'react-native'
import React from 'react'

export default function ProductForm() {
    const [title, setTitle] = React.useState('')
    const [price, setPrice] = React.useState(null)
    const [description, setDescription] = React.useState('')
    const [imageUrl, setImageUrl] = React.useState('')

    async function handlePress() {
        console.log(title, price, description, imageUrl)
        try {
            const res = await fetch('http://10.0.2.2:8000/shop/addProduct', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, price, description, imageUrl })
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        < View >
            <Text style={styles.header}>Product Form</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Name"
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                onChangeText={setPrice}
            />
            <TextInput
                style={styles.description}
                placeholder="Description"
                multiline={true}
                numberOfLines={5}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Image URL"
                onChangeText={setImageUrl}
            />
            <Button title='Add Product' onPress={handlePress} />
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 30,
        fontSize: 25
    },
    description: {
        textAlignVertical: 'top',
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});