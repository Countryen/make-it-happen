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
    public partial class PagesForm : Form
    {
        public PagesForm()
        {
            InitializeComponent();
        }

        private void PagesForm_Load(object sender, EventArgs e)
        {
            DataBook.OnChanged += DataBook_OnChanged;

            foreach (Page page in DataBook.Pages)
            {
                var pageButton = new Button()
                {
                    Name = "button" + page.Id,
                    Text = page.Id,
                    Dock = DockStyle.Top,
                    Width = pagesPanel.Width - pagesPanel.Margin.Right
                };
                pageButton.Click += pageButton_Click;
                this.pagesPanel.Controls.Add(pageButton);
            }
        }

        void DataBook_OnChanged(object sender, EventArgs e)
        {
            this.pagesPanel.Controls.Clear();
            foreach (Page page in DataBook.Pages)
            {
                var pageButton = new Button()
                {
                    Name = "button" + page.Id,
                    Text = page.Id,
                    Dock = DockStyle.Top,
                    Width = pagesPanel.Width - pagesPanel.Margin.Right
                };
                pageButton.Click += pageButton_Click;
                this.pagesPanel.Controls.Add(pageButton);
            }
        }

        void pageButton_Click(object sender, EventArgs e)
        {
            var clickedButton = sender as Button;
            if (clickedButton != null)
            {
                var selectedPage = DataBook.Pages.FirstOrDefault(page => page.Id == clickedButton.Text);
                if (selectedPage != null)
                {
                    this.pageIdTextBox.Text = selectedPage.Id;
                    this.pageTextBox.Text = selectedPage.Text;
                    this.pageButton1TextBox.Text = selectedPage.Button1Text;
                    this.pageButton2TextBox.Text = selectedPage.Button2Text;
                    this.pageButton1TargetIdTextBox.Text = selectedPage.Button1TargetId;
                    this.pageButton2TargetIdTextBox.Text = selectedPage.Button2TargetId;
                }
            }
        }

        private void pageSaveButton_Click(object sender, EventArgs e)
        {
            DataBook.AddPage(new Page(this.pageIdTextBox.Text,
                    this.pageTextBox.Text,
                    this.pageButton1TextBox.Text,
                    this.pageButton2TextBox.Text,
                    this.pageButton1TargetIdTextBox.Text,
                    this.pageButton2TargetIdTextBox.Text));
        }

        private void pageDeleteButton_Click(object sender, EventArgs e)
        {
            DataBook.RemovePage(new Page(this.pageIdTextBox.Text,
                    this.pageTextBox.Text,
                    this.pageButton1TextBox.Text,
                    this.pageButton2TextBox.Text,
                    this.pageButton1TargetIdTextBox.Text,
                    this.pageButton2TargetIdTextBox.Text));
        }


    }
}
