using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.IO;
using System.Xml;
using System.Configuration;
using System.Net;
using System.Diagnostics;
using System.Net.Http;
using System.Xml.Linq;
using System.Xml.Xsl;
namespace FileService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Service1 : IService1
    {
        public string SaveFile(string xmlObject)
        {
            string path = "";
            string response = "";
            // HttpWebResponse response = null;
            try
            {
                //xmlObject = "<Additions><ContractDetails><ReceivedDate>2016-11-18T05:03:56.889Z</ReceivedDate><ReceivedTime></ReceivedTime></ContractDetails>";
                //xmlObject += "<DealDetails><Product></Product><Currency></Currency><DealStartDate>2016-11-18T05:03:56.889Z</DealStartDate><ExternalTransferIn>NO</ExternalTransferIn><DebitOrderStatus>OnlyDebitOrder";
                //xmlObject += "</DebitOrderStatus><AddExistingDeal>NO</AddExistingDeal></DealDetails>";
                //xmlObject += "<PaymentDetails><PaymentMethodDetails><Method>Cash</Method><DepositDate>2016-11-18T05:03:56.889Z</DepositDate><$$hashKey>object:110</$$hashKey></PaymentMethodDetails></PaymentDetails>";
                //xmlObject += "</Additions>";

                string FileName = ConfigurationManager.AppSettings["FileName"];
                string FolderName = ConfigurationManager.AppSettings["FolderName"]; ;
                string FilePath = ConfigurationManager.AppSettings["BasePath"];
                string BaseDirectoryPath = Path.Combine(FilePath, FolderName);
                FileName += "_" + string.Format("{0:yyyy-MM-dd_hh-mm-ss-tt}", DateTime.Now);
                path = String.Format(@"{0}\{1}", BaseDirectoryPath, FileName + ".xml");
                XmlDocument xdoc = new XmlDocument();
                xdoc.CreateXmlDeclaration("1.0", "UTF-8", "no");
                xmlObject = xmlObject.Replace("$$", "x");

                xdoc.LoadXml(xmlObject);

                xdoc.Save(path);


                if (File.Exists(Service1.ConvertXmlWithXSLT(ConfigurationManager.AppSettings["XSLTPath"], path)))
                {

                    response = "true";
                }
                else
                {
                    response = "false";
                }

            }
            catch (Exception ex)
            {
                throw ex;

            }
            return response;
        }

        static string ConvertXmlWithXSLT(string xsltFile, string inputFile)
        {
            string outputFile = string.Empty;
            try
            {
                string FileName = ConfigurationManager.AppSettings["OutPutFileName"];
                string FolderName = ConfigurationManager.AppSettings["XMLOutPutFolderName"]; ;
                string FilePath = ConfigurationManager.AppSettings["OutPutFileBasePath"];
                string BaseDirectoryPath = Path.Combine(FilePath, FolderName);
                FileName += "_" + string.Format("{0:yyyy-MM-dd_hh-mm-ss-tt}", DateTime.Now);
                outputFile = String.Format(@"{0}\{1}", BaseDirectoryPath, FileName + ".xml");

                // Load the XSLT schema into the tranform object
                XslCompiledTransform xslt = new XslCompiledTransform(false);
                using (StreamReader srXslt = new StreamReader(xsltFile))
                {
                    XmlReader readerXslt = XmlReader.Create(srXslt);
                    xslt.Load(readerXslt);
                }

                // Create and open the output file
                using (FileStream fsOutput = File.Create(outputFile))
                {
                    XmlWriterSettings xmlSettings = new XmlWriterSettings();
                    xmlSettings.Indent = true;
                    XmlWriter writerXML = XmlTextWriter.Create(fsOutput, xmlSettings);

                    // Open the input file
                    using (XmlReader readerInput = XmlReader.Create(inputFile))
                    {

                        xslt.Transform(readerInput, null, writerXML);
                    }
                }
            }
            catch (Exception ex)
            {

                throw new FaultException(ex.Message);
            }
            return outputFile;

        }

        public string GetString(string obj)
        {
            return obj;
        }
    }

}
