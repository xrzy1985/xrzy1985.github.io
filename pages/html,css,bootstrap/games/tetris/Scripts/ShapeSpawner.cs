using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShapeSpawner : MonoBehaviour
{

    // Array that holds all the shapes
    public GameObject[] shapes;

    // ---------- NEW STUFF ----------

    // Array that holds all NextShape Sprites
    public GameObject[] nextShapes;

    // Holds a reference to the game object
    // that represents 
    GameObject upNextObject = null;

    int shapeIndex = 0;
    int nextShapeIndex = 0;

    public void SpawnShape()
    {

        // Generate a random index
        shapeIndex = nextShapeIndex;

        // Create the shape at the ShapeSpawners location
        Instantiate(shapes[shapeIndex],
            transform.position,
            Quaternion.identity);

        // Grab IShape and other shapes and drag them into the scene
        // rename them with a NS at the bottom -> Drag to Prefabs
        // Remove the Shape script -> Drag into the nextShapes array
        nextShapeIndex = Random.Range(0, 7);

        // Define where up next shape is positioned
        Vector3 nextShapePos = new Vector3(-15f, 16f, 0);

        // Destory next shape sprite if it exists
        if (upNextObject != null)
            Destroy(upNextObject);

        // Get the next shape up and display it
        upNextObject = Instantiate(nextShapes[nextShapeIndex],
            nextShapePos,
            Quaternion.identity);
    }

    // Use this for initialization
    void Start()
    {

        // Generate a random next shape
        nextShapeIndex = Random.Range(0, 7);

        // Spawn the default first shape
        SpawnShape();

    }

    // Update is called once per frame
    void Update()
    {

    }
}