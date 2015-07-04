namespace FirstAuthorSketch
{
    partial class PagesForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.splitContainer1 = new System.Windows.Forms.SplitContainer();
            this.pageTable = new System.Windows.Forms.TableLayoutPanel();
            this.pageTextBox = new System.Windows.Forms.TextBox();
            this.pageButton1TextBox = new System.Windows.Forms.TextBox();
            this.pageButton2TextBox = new System.Windows.Forms.TextBox();
            this.pageButton1TargetIdTextBox = new System.Windows.Forms.TextBox();
            this.pageButton2TargetIdTextBox = new System.Windows.Forms.TextBox();
            this.pageIdTextBox = new System.Windows.Forms.TextBox();
            this.splitContainer2 = new System.Windows.Forms.SplitContainer();
            this.pageSaveButton = new System.Windows.Forms.Button();
            this.pageDeleteButton = new System.Windows.Forms.Button();
            this.pagesPanel = new System.Windows.Forms.FlowLayoutPanel();
            this.pagesPanelHeader = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).BeginInit();
            this.splitContainer1.Panel1.SuspendLayout();
            this.splitContainer1.Panel2.SuspendLayout();
            this.splitContainer1.SuspendLayout();
            this.pageTable.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer2)).BeginInit();
            this.splitContainer2.Panel1.SuspendLayout();
            this.splitContainer2.Panel2.SuspendLayout();
            this.splitContainer2.SuspendLayout();
            this.SuspendLayout();
            // 
            // splitContainer1
            // 
            this.splitContainer1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.splitContainer1.Location = new System.Drawing.Point(0, 0);
            this.splitContainer1.Name = "splitContainer1";
            // 
            // splitContainer1.Panel1
            // 
            this.splitContainer1.Panel1.Controls.Add(this.pageTable);
            // 
            // splitContainer1.Panel2
            // 
            this.splitContainer1.Panel2.Controls.Add(this.pagesPanelHeader);
            this.splitContainer1.Panel2.Controls.Add(this.pagesPanel);
            this.splitContainer1.Size = new System.Drawing.Size(1069, 611);
            this.splitContainer1.SplitterDistance = 858;
            this.splitContainer1.TabIndex = 0;
            // 
            // pageTable
            // 
            this.pageTable.ColumnCount = 2;
            this.pageTable.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.pageTable.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.pageTable.Controls.Add(this.pageTextBox, 0, 1);
            this.pageTable.Controls.Add(this.pageButton1TextBox, 0, 2);
            this.pageTable.Controls.Add(this.pageButton2TextBox, 1, 2);
            this.pageTable.Controls.Add(this.pageButton1TargetIdTextBox, 0, 3);
            this.pageTable.Controls.Add(this.pageButton2TargetIdTextBox, 1, 3);
            this.pageTable.Controls.Add(this.splitContainer2, 1, 0);
            this.pageTable.Controls.Add(this.pageIdTextBox, 0, 0);
            this.pageTable.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pageTable.Location = new System.Drawing.Point(0, 0);
            this.pageTable.Name = "pageTable";
            this.pageTable.RowCount = 4;
            this.pageTable.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 17.16867F));
            this.pageTable.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 82.83133F));
            this.pageTable.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 106F));
            this.pageTable.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 39F));
            this.pageTable.Size = new System.Drawing.Size(858, 611);
            this.pageTable.TabIndex = 0;
            // 
            // pageTextBox
            // 
            this.pageTable.SetColumnSpan(this.pageTextBox, 2);
            this.pageTextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pageTextBox.Location = new System.Drawing.Point(3, 83);
            this.pageTextBox.Multiline = true;
            this.pageTextBox.Name = "pageTextBox";
            this.pageTextBox.Size = new System.Drawing.Size(852, 379);
            this.pageTextBox.TabIndex = 0;
            this.pageTextBox.Text = "Page Text here";
            // 
            // pageButton1TextBox
            // 
            this.pageButton1TextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pageButton1TextBox.Location = new System.Drawing.Point(3, 468);
            this.pageButton1TextBox.Multiline = true;
            this.pageButton1TextBox.Name = "pageButton1TextBox";
            this.pageButton1TextBox.Size = new System.Drawing.Size(423, 100);
            this.pageButton1TextBox.TabIndex = 6;
            this.pageButton1TextBox.Text = "Button 1 Text here";
            // 
            // pageButton2TextBox
            // 
            this.pageButton2TextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pageButton2TextBox.Location = new System.Drawing.Point(432, 468);
            this.pageButton2TextBox.Multiline = true;
            this.pageButton2TextBox.Name = "pageButton2TextBox";
            this.pageButton2TextBox.Size = new System.Drawing.Size(423, 100);
            this.pageButton2TextBox.TabIndex = 7;
            this.pageButton2TextBox.Text = "Button 2 Text here";
            // 
            // pageButton1TargetIdTextBox
            // 
            this.pageButton1TargetIdTextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pageButton1TargetIdTextBox.Location = new System.Drawing.Point(3, 574);
            this.pageButton1TargetIdTextBox.Multiline = true;
            this.pageButton1TargetIdTextBox.Name = "pageButton1TargetIdTextBox";
            this.pageButton1TargetIdTextBox.Size = new System.Drawing.Size(423, 34);
            this.pageButton1TargetIdTextBox.TabIndex = 8;
            this.pageButton1TargetIdTextBox.Text = "Button 1 Target here";
            // 
            // pageButton2TargetIdTextBox
            // 
            this.pageButton2TargetIdTextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pageButton2TargetIdTextBox.Location = new System.Drawing.Point(432, 574);
            this.pageButton2TargetIdTextBox.Multiline = true;
            this.pageButton2TargetIdTextBox.Name = "pageButton2TargetIdTextBox";
            this.pageButton2TargetIdTextBox.Size = new System.Drawing.Size(423, 34);
            this.pageButton2TargetIdTextBox.TabIndex = 9;
            this.pageButton2TargetIdTextBox.Text = "Button 2 Target here";
            // 
            // pageIdTextBox
            // 
            this.pageIdTextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pageIdTextBox.Location = new System.Drawing.Point(3, 3);
            this.pageIdTextBox.Multiline = true;
            this.pageIdTextBox.Name = "pageIdTextBox";
            this.pageIdTextBox.RightToLeft = System.Windows.Forms.RightToLeft.Yes;
            this.pageIdTextBox.Size = new System.Drawing.Size(423, 74);
            this.pageIdTextBox.TabIndex = 11;
            this.pageIdTextBox.Text = "Page Id here";
            this.pageIdTextBox.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // splitContainer2
            // 
            this.splitContainer2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.splitContainer2.Location = new System.Drawing.Point(432, 3);
            this.splitContainer2.Name = "splitContainer2";
            // 
            // splitContainer2.Panel1
            // 
            this.splitContainer2.Panel1.Controls.Add(this.pageSaveButton);
            // 
            // splitContainer2.Panel2
            // 
            this.splitContainer2.Panel2.Controls.Add(this.pageDeleteButton);
            this.splitContainer2.Size = new System.Drawing.Size(423, 74);
            this.splitContainer2.SplitterDistance = 209;
            this.splitContainer2.TabIndex = 12;
            // 
            // pageSaveButton
            // 
            this.pageSaveButton.BackColor = System.Drawing.SystemColors.AppWorkspace;
            this.pageSaveButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pageSaveButton.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.pageSaveButton.Location = new System.Drawing.Point(0, 0);
            this.pageSaveButton.Name = "pageSaveButton";
            this.pageSaveButton.Size = new System.Drawing.Size(209, 74);
            this.pageSaveButton.TabIndex = 10;
            this.pageSaveButton.Text = "Save The Page";
            this.pageSaveButton.UseVisualStyleBackColor = false;
            this.pageSaveButton.Click += new System.EventHandler(this.pageSaveButton_Click);
            // 
            // pageDeleteButton
            // 
            this.pageDeleteButton.BackColor = System.Drawing.SystemColors.AppWorkspace;
            this.pageDeleteButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pageDeleteButton.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.pageDeleteButton.Location = new System.Drawing.Point(0, 0);
            this.pageDeleteButton.Name = "pageDeleteButton";
            this.pageDeleteButton.Size = new System.Drawing.Size(210, 74);
            this.pageDeleteButton.TabIndex = 11;
            this.pageDeleteButton.Text = "Delete The Page";
            this.pageDeleteButton.UseVisualStyleBackColor = false;
            this.pageDeleteButton.Click += new System.EventHandler(this.pageDeleteButton_Click);
            // 
            // pagesPanel
            // 
            this.pagesPanel.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.pagesPanel.Location = new System.Drawing.Point(0, 29);
            this.pagesPanel.Name = "pagesPanel";
            this.pagesPanel.Size = new System.Drawing.Size(207, 582);
            this.pagesPanel.TabIndex = 0;
            // 
            // pagesPanelHeader
            // 
            this.pagesPanelHeader.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.pagesPanelHeader.AutoSize = true;
            this.pagesPanelHeader.Location = new System.Drawing.Point(72, 9);
            this.pagesPanelHeader.Name = "pagesPanelHeader";
            this.pagesPanelHeader.Size = new System.Drawing.Size(69, 17);
            this.pagesPanelHeader.TabIndex = 1;
            this.pagesPanelHeader.Text = "The Book";
            // 
            // PagesForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1069, 611);
            this.Controls.Add(this.splitContainer1);
            this.Name = "PagesForm";
            this.Text = "Author v1 - Pages";
            this.Load += new System.EventHandler(this.PagesForm_Load);
            this.splitContainer1.Panel1.ResumeLayout(false);
            this.splitContainer1.Panel2.ResumeLayout(false);
            this.splitContainer1.Panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).EndInit();
            this.splitContainer1.ResumeLayout(false);
            this.pageTable.ResumeLayout(false);
            this.pageTable.PerformLayout();
            this.splitContainer2.Panel1.ResumeLayout(false);
            this.splitContainer2.Panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer2)).EndInit();
            this.splitContainer2.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.SplitContainer splitContainer1;
        private System.Windows.Forms.FlowLayoutPanel pagesPanel;
        private System.Windows.Forms.TableLayoutPanel pageTable;
        private System.Windows.Forms.TextBox pageTextBox;
        private System.Windows.Forms.TextBox pageButton1TextBox;
        private System.Windows.Forms.TextBox pageButton2TextBox;
        private System.Windows.Forms.TextBox pageButton1TargetIdTextBox;
        private System.Windows.Forms.TextBox pageButton2TargetIdTextBox;
        private System.Windows.Forms.Button pageSaveButton;
        private System.Windows.Forms.TextBox pageIdTextBox;
        private System.Windows.Forms.SplitContainer splitContainer2;
        private System.Windows.Forms.Button pageDeleteButton;
        private System.Windows.Forms.Label pagesPanelHeader;


    }
}

