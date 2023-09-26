using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public interface IProjectService
    {
        List<Project> GetAll();

        Project Get(string id);

    }

    public class ProjectService: ServiceBase, IProjectService
    {
        private const string FilePath = @"\bin\Data\Projects.json";

        private List<Project> _projects;

        public ProjectService()
        {
            var savedData = ReadData();

            _projects =
                savedData != null
                ? savedData
                : new List<Project>();
        }

        public Project Get(string id)
        {
            return _projects.FirstOrDefault(x => x.nf_projectid == id);
        }

        public List<Project> GetAll()
        {
            return _projects;
        }

        private List<Project> ReadData()
        {
            var data = File.ReadAllText(GetStoragePath(FilePath));

            return JsonConvert.DeserializeObject<List<Project>>(data);
        }
    }
}
