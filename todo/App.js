import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const notes = [
    {
      heading: "Heading 1",
      contentCroped:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus quasi obcaecati totam suscipit quo perferendis...",
      key: 1,
    },
    {
      heading: "Heading 1",
      contentCroped:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus quasi obcaecati totam suscipit quo perferendis...",
      key: 2,
    },
    {
      heading: "Heading 1",
      contentCroped:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus quasi obcaecati totam suscipit quo perferendis...",
      key: 3,
    },
    {
      heading: "Heading 1",
      contentCroped:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus quasi obcaecati totam suscipit quo perferendis...",
      key: 4,
    },
    {
      heading: "Heading 1",
      contentCroped:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus quasi obcaecati totam suscipit quo perferendis...",
      key: 5,
    },
    {
      heading: "Heading 1",
      contentCroped:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus quasi obcaecati totam suscipit quo perferendis...",
      key: 6,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>TODO</Text>
        </View>
        <View style={styles.notesContainer}>
          {notes.map((note) => {
            return (
              <View style={styles.note} key={note.key}>
                <Text style={styles.noteHeading}>{note.heading}</Text>
                <Text style={styles.noteContent}>{note.contentCroped}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2d",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 10,
  },

  innerContainer: {
    flex: 1,
    width: "100%",
  },

  headingContainer: {
    width: "100%",
  },

  heading: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },

  notesContainer: {
    marginTop: 30,
    flex: 1,
  },

  note: {
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },

  noteHeading: {
    fontSize: 24,
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  noteContent: {
    fontSize: 18,
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
