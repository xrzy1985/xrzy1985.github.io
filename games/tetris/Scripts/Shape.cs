using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Needed to edit text UI components
using UnityEngine.UI;

// NEW STUFF
// Used to switch scenes
using UnityEngine.SceneManagement;

public class Shape : MonoBehaviour
{

    // ---------- NEW STUFF ----------
    // Used to slowly increase shape fall speed
    public static float speed = 1;

    // ---------- END OF NEW STUFF ----------

    // Tracks the last time the shape moved down
    float lastMoveDown = 0;

    // ---------- NEW STUFF ----------
    // Create a new Scene in the Scenes folder named GameOver
    // Add a Text Component
    // Set Canvas Render Mode to World Space -> Drag in Camera -> 
    // Dynamic Pixels Per Unit 10 -> 0 0 Position
    // Width 40 -> Height 30
    // Drag Text component to center of camera scale to .3

    // Add GameOver Scene to Build Settings 
    // File -> Build Settings

    void Start()
    {

        // If the Shape starts outside of the grid which
        // would happen if it hits the grid switch to the
        // GameOver scene
        if (!IsInGrid())
        {

            // Play Game Over sound
            SoundManager.Instance.PlayOneShot(SoundManager.Instance.gameOver);

            // Call function OpenNextScene after 2 seconds
            Invoke("OpenGameOverScene", .5f);
        }

        // After 2 seconds increase shape speed every 2 seconds
        InvokeRepeating("IncreaseSpeed", 2.0f, 2.0f);

    }

    void OpenGameOverScene()
    {
        // Destroy the Shape
        Destroy(gameObject);

        // Load defined scene
        SceneManager.LoadScene("GameOver");

    }

    void IncreaseSpeed()
    {
        Shape.speed -= .001f;
    }
    // ---------- END OF NEW STUFF ----------


    void Update()
    {

        // Move Left
        if (Input.GetKeyDown("a"))
        {
            // Modify position
            transform.position += new Vector3(-1, 0, 0);

            if (!IsInGrid())
            {
                // Revert to previous
                transform.position += new Vector3(1, 0, 0);
            }
            else
            {
                UpdateGameBoard();

                // NEW STUFF
                // Play the sound
                SoundManager.Instance.PlayOneShot(SoundManager.Instance.shapeMove);
            }

        }

        if (Input.GetKeyDown("d"))
        {
            transform.position += new Vector3(1, 0, 0);

            if (!IsInGrid())
            {
                transform.position += new Vector3(-1, 0, 0);
            }
            else
            {
                UpdateGameBoard();

                // NEW STUFF
                // Play the sound
                SoundManager.Instance.PlayOneShot(SoundManager.Instance.shapeMove);
            }
        }

        // Move Shape down when s is pressed, or once every second
        // First time through Time.time will have a value of 1 and
        // then 2, etc. 
        // lastMoveDown will increment each time through as well

        // NEW STUFF
        // Change speed to Shape.speed to increase speed over time
        if (Input.GetKeyDown("s") || Time.time - lastMoveDown >= Shape.speed)
        {
            transform.position += new Vector3(0, -1, 0);

            if (!IsInGrid())
            {
                transform.position += new Vector3(0, 1, 0);

                // ---------- NEW STUFF ----------

                // Delete full rows if any exist
                bool rowDeleted = GameBoard.DeleteAllFullRows();

                // If a row was deleted verify that no other rows
                // exist
                if (rowDeleted)
                {
                    GameBoard.DeleteAllFullRows();

                    increaseTextUIScore();
                }

                // ---------- END OF NEW STUFF ----------

                // If I can't go down then disable shape
                enabled = false;

                // Spawn a new Shape
                FindObjectOfType<ShapeSpawner>().SpawnShape();

                // NEW STUFF
                // Play the sound
                SoundManager.Instance.PlayOneShot(SoundManager.Instance.shapeStop);

            }
            else
            {
                UpdateGameBoard();

                // ---------- NEW STUFF ----------
                // Play the sound
                SoundManager.Instance.PlayOneShot(SoundManager.Instance.shapeMove);
            }

            // Reset lastMoveDown
            lastMoveDown = Time.time;

            // ---------- END OF NEW STUFF ----------
        }

        // Add another rotate option Edit -> Project Settings
        // Input -> Add e

        if (Input.GetKeyDown("e"))
        {
            transform.Rotate(0, 0, -90);

            if (!IsInGrid())
            {
                transform.Rotate(0, 0, 90);
            }
            else
            {
                UpdateGameBoard();

                // NEW STUFF
                // Play the sound
                SoundManager.Instance.PlayOneShot(SoundManager.Instance.rotateSound);
            }
        }

        if (Input.GetKeyDown("w"))
        {
            transform.Rotate(0, 0, 90);

            if (!IsInGrid())
            {
                transform.Rotate(0, 0, -90);
            }
            else
            {
                UpdateGameBoard();

                // NEW STUFF
                // Play the sound
                SoundManager.Instance.PlayOneShot(SoundManager.Instance.rotateSound);
            }
        }
    }

    public bool IsInGrid()
    {
        foreach (Transform childBlock in transform)
        {

            Vector2 vect = RoundVector(childBlock.position);

            if (!IsInBorder(vect))
            {
                return false;
            }

            // Checks to see if empty cells are available for
            // our shape
            if (GameBoard.gameBoard[(int)vect.x, (int)vect.y] != null &&
                GameBoard.gameBoard[(int)vect.x, (int)vect.y].parent != transform)
            {
                return false;
            }

        }
        return true;
    }

    // Rounds vectors up
    public Vector2 RoundVector(Vector2 vect)
    {
        return new Vector2(Mathf.Round(vect.x),
            Mathf.Round(vect.y));
    }

    // Increase from 8 to 9 to accomodate rounding
    public static bool IsInBorder(Vector2 pos)
    {
        return ((int)pos.x >= 0 &&
            (int)pos.x <= 9 &&
            (int)pos.y >= 0);
    }

    // Add else UpdateGameBoard to all shape movement blocks above

    public void UpdateGameBoard()
    {

        for (int y = 0; y < 20; ++y)
        {

            for (int x = 0; x < 10; ++x)
            {

                // If the 1st isn't null that means there
                // is a cube at that position
                // Then we check if the shape passed in
                // is already there
                if (GameBoard.gameBoard[x, y] != null &&
                    GameBoard.gameBoard[x, y].parent == transform)
                {

                    // If the shape moves down then we want
                    // to remove it from the gameBoard array
                    GameBoard.gameBoard[x, y] = null;
                }
            }

        }

        // Iterate over all spaces on our gameboard
        // and add the new cubes for out shape
        foreach (Transform childBlock in transform)
        {

            // Shorten our position object
            // Vector2 pos = childBlock.position;

            Vector2 vect = RoundVector(childBlock.position);

            // Put our cube in the gameboard array
            GameBoard.gameBoard[(int)vect.x, (int)vect.y] = childBlock;
        }

        // Don't need this when testing is over
        // Uncheck MyArray in Inspector to hide it 
        // or delete it all together
        // GameBoard.PrintArray ();

    }

    // Increases the score the text UI 
    void increaseTextUIScore()
    {

        // Find the matching text UI component
        var textUIComp = GameObject.Find("Score")
            .GetComponent<Text>();

        // Get the string stored in it and convert to an int
        int score = int.Parse(textUIComp.text);

        // Increment the score
        score++;

        // Convert the score to a string and update the UI
        textUIComp.text = score.ToString();
    }

}