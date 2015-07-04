using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FirstAuthorSketch
{
    public partial class MenuForm : Form
    {
        public MenuForm()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Hide();
            var pagesForm = new PagesForm();
            pagesForm.ShowDialog();
            pagesForm.Hide();
            this.Show();

        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Hide();
            var connectionsForm = new ConnectionsForm();
            connectionsForm.ShowDialog();
            connectionsForm.Hide();
            this.Show();

        }

        /// <summary>
        /// MouseClickEventHandler for the Save-Button.
        /// Saves the DataBook to the file system.
        /// </summary>
        /// <param name="sender">Event sender</param>
        /// <param name="e">Event args (probably MouseEventArgs)</param>
        private void button3_Click(object sender, EventArgs e)
        {
            var saveFileDialog = new SaveFileDialog();
            saveFileDialog.FileName = "*.book";
            DialogResult result = saveFileDialog.ShowDialog();
            switch (result)
            {
                case DialogResult.Abort:
                case DialogResult.Cancel:
                case DialogResult.Ignore:
                case DialogResult.No:
                case DialogResult.None:
                case DialogResult.Retry:
                    MessageBox.Show("Your book was not saved!");
                    break;
                case DialogResult.OK:
                case DialogResult.Yes:
                    DataBook.SaveToFile(new System.IO.FileInfo(saveFileDialog.FileName));
                    MessageBox.Show("Your Book was saved to " + saveFileDialog.FileName);
                    break;
                default:
                    throw new NotImplementedException("DialogResult unknown");
            }
        }
        
        /// <summary>
        /// MouseClickEventHandler for the Exit-Button.
        /// Exits the application!
        /// </summary>
        /// <param name="sender">Event sender.</param>
        /// <param name="e">Event args (probably MouseEventArgs)</param>
        private void button4_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            var openFileDialog = new OpenFileDialog();
            DialogResult result = openFileDialog.ShowDialog();
            switch (result)
            {
                case DialogResult.Abort:
                case DialogResult.Cancel:
                case DialogResult.Ignore:
                case DialogResult.No:
                case DialogResult.None:
                case DialogResult.Retry:
                    // Nothing happens.
                    break;
                case DialogResult.OK:
                case DialogResult.Yes:
                    DataBook.LoadFromFile(new System.IO.FileInfo(openFileDialog.FileName));
                    MessageBox.Show("Loaded " + DataBook.Pages.Count() + " Pages from Book: " + openFileDialog.FileName);
                    break;
                default:
                    throw new NotImplementedException("DialogResult unknown");
            }
        }


    }
}
